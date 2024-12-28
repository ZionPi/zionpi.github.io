---
layout: post
title: 关于线程池的一切
tags: 多线程 线程池
---

# Spring Boot 如何配置线程池？

使用 @Configuration 配合 @Bean 注解定义 ThreadPoolTaskExecutor 或 ExecutorService，通过 application.properties 或 application.yml 配置参数。

# 有哪些主要的参数？
常见参数有 corePoolSize（核心线程数）、maxPoolSize（最大线程数）、queueCapacity（队列容量）、keepAliveSeconds（空闲线程的存活时间）。

# 一般核心线程数 设置多大？
任务的类型 (CPU 密集型 vs. I/O 密集型):

CPU 密集型任务 (CPU-bound): 任务主要消耗 CPU 资源进行计算，例如复杂的算法、图像处理等。对于这类任务，通常将 corePoolSize 设置为 CPU 核心数 + 1 是一个常见的起点。多出的一个线程是为了在某个核心的线程因为例如缓存未命中等原因阻塞时，可以有另一个线程立即使用 CPU。

I/O 密集型任务 (I/O-bound): 任务主要等待 I/O 操作完成，例如网络请求、数据库查询、文件读写等。这类任务的线程大部分时间处于等待状态。对于这类任务，可以将 corePoolSize 设置得更大，通常是 CPU 核心数的 2 倍甚至更多，具体取决于 I/O 操作的耗时和频率。 有些理论甚至会提到可以设置为 CPU核心数 / (1 - 阻塞系数)，其中阻塞系数是一个 0 到 1 之间的值，表示线程等待 I/O 的时间占比。

从一个保守的值开始: 刚开始配置时，可以先设置一个相对较小的 corePoolSize，例如等于 CPU 核心数，然后逐步增加，并观察系统的性能表现。

对于 I/O 密集型任务，可以适当增加 corePoolSize: 因为线程大部分时间在等待。

考虑系统的整体负载: 如果你的应用程序还有其他资源消耗，例如数据库连接等，需要综合考虑。

不要盲目追求高并发: 过多的线程反而可能导致上下文切换开销增大，降低性能。


# 一般最大线程数 设置多大？ 

任务类型 :

CPU 密集型任务: 由于 CPU 资源有限，即使在高并发情况下，盲目增加线程数也不会显著提高吞吐量，反而会增加上下文切换的开销。 对于这类任务，maxPoolSize 可以设置得相对接近 corePoolSize，或者略大于它，以便在短暂的负载高峰期能够快速响应。 例如，可以设置为 corePoolSize + CPU核心数 或者 corePoolSize * 2。

I/O 密集型任务: 由于线程在等待 I/O 时不会占用 CPU，增加线程数可以在一定程度上提高并发处理能力。 maxPoolSize 可以设置得比 corePoolSize 大得多，以便能够处理更多的并发 I/O 操作。 具体倍数取决于 I/O 操作的耗时和频率，可以是 corePoolSize 的几倍甚至十几倍。

queueCapacity (队列容量):

有界队列: 如果使用有界队列，maxPoolSize 的设置与队列容量密切相关。 当核心线程都在忙碌，并且队列也满了时，才会创建新的线程直到达到 maxPoolSize。 如果 queueCapacity 很小，线程池会更快地达到 maxPoolSize。

无界队列 (例如 LinkedBlockingQueue without capacity): 如果使用无界队列，除非任务提交速度远超核心线程的处理速度，否则几乎不会触发创建超过 corePoolSize 的线程。 在这种情况下，maxPoolSize 主要作为一种保护机制，防止极端情况下的资源耗尽。

至少要大于等于 corePoolSize: 这是最基本的。如果 maxPoolSize 小于 corePoolSize，则 maxPoolSize 的设置是无效的。

对于 CPU 密集型任务，maxPoolSize 可以相对保守: 可以设置为 corePoolSize 的 1 到 2 倍。

对于 I/O 密集型任务，maxPoolSize 可以设置得更大: 例如，corePoolSize 的 5 倍、10 倍甚至更高，但需要谨慎考虑资源限制。

考虑队列容量:

小容量队列: 如果队列容量较小，可能需要更大的 maxPoolSize 来应对快速增长的任务队列。

大容量队列: 如果队列容量很大，那么在达到 maxPoolSize 之前，大部分任务可能会在队列中等待。 此时，maxPoolSize 的影响可能会减弱。

不要设置得无限大: 虽然 maxPoolSize 允许你应对高并发，但设置得过大可能会超出系统资源承受能力，导致崩溃。

与拒绝策略结合考虑: 如果 maxPoolSize 设置得很大，但拒绝策略是直接抛出异常，那么在高并发下可能会频繁出现异常。

一些经验法则 (仅供参考，需要根据实际情况调整):

CPU 密集型: maxPoolSize = corePoolSize + (CPU核心数 / 2) 或 maxPoolSize = corePoolSize * 2

I/O 密集型: maxPoolSize = corePoolSize * N (其中 N 可以是 5、10 甚至更高，取决于 I/O 操作的特性和系统资源)。


# 能举个具体的例子吗？


场景：在线购物平台的订单处理服务

假设你的订单处理服务需要处理以下任务：

订单验证: 验证订单信息，例如商品是否存在、库存是否足够等（可能涉及一些 CPU 密集型的业务规则校验）。

库存检查与扣减: 查询库存，并进行库存扣减操作（典型的 I/O 密集型，需要访问数据库）。

支付处理: 调用支付网关进行支付（非常明显的 I/O 密集型，涉及网络请求）。

订单持久化: 将订单信息保存到数据库（I/O 密集型）。

发送通知: 发送邮件或短信通知用户订单状态（I/O 密集型，涉及外部服务调用）。

分析任务类型：

CPU 密集型: 订单验证

I/O 密集型: 库存检查与扣减、支付处理、订单持久化、发送通知

假设你的服务器有 4 个 CPU 核心。

设置 corePoolSize：

考虑到大部分任务是 I/O 密集型，我们可以将 corePoolSize 设置为略大于 CPU 核心数，以便在核心线程等待 I/O 时，其他核心线程可以处理其他任务，提高 CPU 利用率。

corePoolSize = CPU核心数 * 2 = 4 * 2 = 8

我们设置 8 个核心线程，这意味着即使在没有新任务提交时，线程池也会保持 8 个活跃线程来处理请求。这可以确保对于常见的并发量，请求可以快速被处理而不需要等待线程创建。

设置 maxPoolSize：

由于存在大量的 I/O 密集型任务，当核心线程都在忙于等待 I/O 时，允许创建更多的线程可以提高并发处理能力。我们需要考虑可能出现的峰值负载。

评估峰值负载: 假设在促销活动期间，订单量会大幅增加。我们需要能够处理比平时多得多的并发请求。

考虑 I/O 等待时间: 支付处理和发送通知通常需要等待外部服务的响应，这段时间线程是空闲的，可以利用这段时间处理其他请求。

初步估算: 我们可以将 maxPoolSize 设置为 corePoolSize 的几倍，例如 5 到 10 倍。

保守估计： maxPoolSize = corePoolSize * 5 = 8 * 5 = 40

更激进的估计： maxPoolSize = corePoolSize * 10 = 8 * 10 = 80

我们选择一个中间值，例如 maxPoolSize = 60。这意味着在极端高并发情况下，线程池最多可以创建 60 个线程来处理请求。

设置 queueCapacity：

queueCapacity 定义了任务队列的大小，当核心线程都在忙碌时，新提交的任务会被放入队列中等待执行。

考虑缓冲能力: 队列可以缓冲一些突发的请求，防止系统因瞬间高负载而崩溃。

避免队列过大: 过大的队列会导致请求等待时间过长，影响用户体验，并且可能消耗大量内存。

折衷方案: 我们可以设置一个适中的队列大小，例如 100 到 500。

我们选择 queueCapacity = 200。这意味着当 8 个核心线程都在忙碌时，最多可以有 200 个任务在队列中等待。

设置 keepAliveSeconds：

keepAliveSeconds 定义了空闲线程的存活时间。当线程池中的线程数超过 corePoolSize 时，多余的空闲线程会在指定的时间后被回收，直到线程数回到 corePoolSize。

平衡资源利用和响应速度: 设置一个合理的值，避免频繁创建和销毁线程带来的开销，同时也避免资源浪费。

常用值: 通常设置为 60 秒到 300 秒。

我们选择 keepAliveSeconds = 300 (5分钟)。这意味着如果线程池中的线程数超过 8 个，并且有线程空闲了 5 分钟，这些空闲线程就会被回收。


# 当提交的任务数量超过queueCapacity会发生什么？
当提交的任务数量超过 queueCapacity 时，会触发线程池的拒绝策略。具体的行为取决于你配置的 RejectedExecutionHandler。

# 任务提交后事件发生的顺序是什么？

- 任务被提交到线程池。

- 线程池检查当前活跃线程数是否小于 corePoolSize。如果是，则创建新的核心线程来执行任务。

- 如果活跃线程数已达到 corePoolSize，线程池会将任务放入任务队列（queueCapacity）。

- 如果任务队列已满，并且当前活跃线程数小于 maxPoolSize，线程池会尝试创建新的非核心线程来执行任务。

- 如果任务队列已满，并且当前活跃线程数也达到了 maxPoolSize，此时再有新的任务提交，就会触发配置的拒绝策略。


# 有哪些拒绝策略？
- AbortPolicy（默认）：任务被拒绝时抛出RejectedExecutionException。 
- CallerRunsPolicy：由调用者线程执行任务（不会抛弃任务）。 
- DiscardOldestPolicy：丢弃队列中最旧的任务。 
- DiscardPolicy：丢弃当前任务。 
调优策略：如果任务对实时性要求高，可以选择 CallerRunsPolicy；如果任务可丢失，可以选择 DiscardPolicy。


## 由调用者线程执行任务意味着什么呢？
这个地方是指的
CallerRunsPolicy：由提交任务的线程执行当前任务。
这意味着，当线程池的任务队列已满，并且所有最大线程数都在忙碌时，如果新的任务被提交到线程池，那么提交这个任务的线程（也就是“调用者线程”）会亲自执行这个任务，而不是线程池中的worker线程来执行。



# 如何监控线程池的状态？

可以通过 ThreadPoolTaskExecutor 的 getThreadPoolExecutor() 方法获取底层的 ThreadPoolExecutor，然后监控相关的线程池指标，如线程池活跃线程数、队列长度等。

# 线程池的类型？
## Executors.newFixedThreadPool(int nThreads):

特点: 创建一个固定大小的线程池。核心线程数和最大线程数都设置为 nThreads。

队列: 使用无界的 LinkedBlockingQueue 作为任务队列。

适用场景: 适用于负载比较重的应用，任务数量比较稳定，可以有效控制资源消耗，避免无限创建线程导致系统崩溃。

缺点: 由于队列是无界的，如果任务提交速度持续高于处理速度，可能会导致队列中堆积大量任务，最终可能导致内存溢出 (OOM)。

## Executors.newCachedThreadPool():

特点: 创建一个可缓存的线程池。核心线程数为 0，最大线程数为 Integer.MAX_VALUE。

队列: 使用 SynchronousQueue 作为任务队列。

适用场景: 适用于执行很多短期异步的小任务或者是负载较轻的服务器。可以有效地利用空闲线程，提高效率。

缺点: 由于最大线程数没有限制，如果任务提交速度非常快，可能会创建大量的线程，消耗大量的系统资源，甚至导致 OOM。

## Executors.newSingleThreadExecutor():

特点: 创建一个只包含单个线程的线程池。保证所有提交的任务都按照提交顺序依次执行。

队列: 使用无界的 LinkedBlockingQueue 作为任务队列。

适用场景: 适用于需要顺序执行任务的场景，例如串行化处理某些操作。

缺点: 由于只有一个线程，如果任务执行时间较长，可能会阻塞后续任务的执行。

## Executors.newScheduledThreadPool(int corePoolSize):

特点: 创建一个可以执行延迟或定期执行任务的线程池。

队列: 使用 DelayedWorkQueue 作为任务队列。

适用场景: 适用于需要定时任务或延迟任务执行的场景。

## Executors.newSingleThreadScheduledExecutor():

特点: 创建一个单线程的调度线程池，可以执行延迟或定期执行的任务，且所有任务按提交顺序依次执行。

# 如何选择合适的线程池类型？

选择合适的线程池类型取决于你的应用程序的需求：

任务类型: 是 CPU 密集型还是 I/O 密集型？

并发量: 预期有多少并发任务？

资源限制: 系统有多少 CPU、内存等资源？

任务的执行时间: 任务是长时运行还是短时运行？

对任务丢失的容忍度: 任务是否可以丢失？

是否需要保证任务的执行顺序？

是否需要定时或延迟执行任务？


# 线程池是线程数组吗？
线程池并不是简单的线程数组，而是通过动态创建和销毁线程、使用任务队列、以及通过合理的线程管理策略来保证任务的高效执行。

# 如何创建线程池？给我看看代码

```
import java.util.concurrent.*;

public class ThreadPoolExample {
    public static void main(String[] args) {
        // 创建一个线程池，核心线程数为 2，最大线程数为 4，任务队列容量为 10
        ThreadPoolExecutor executor = new ThreadPoolExecutor(
            2, 4, 60L, TimeUnit.SECONDS, new LinkedBlockingQueue<>(10),
            new ThreadPoolExecutor.AbortPolicy()
        );

        // 提交任务
        for (int i = 0; i < 20; i++) {
            executor.submit(new RunnableTask(i));
        }

        // 关闭线程池
        executor.shutdown();
    }
}

class RunnableTask implements Runnable {
    private int taskId;

    public RunnableTask(int taskId) {
        this.taskId = taskId;
    }

    @Override
    public void run() {
        try {
            Thread.sleep(1000);  // 模拟任务执行
            System.out.println("Task " + taskId + " executed by " + Thread.currentThread().getName());
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
}

```

下面是一个自己动手实现线程池的例子:
```
import java.util.LinkedList;
import java.util.Queue;

class SimpleThreadPool {
    private final int poolSize;
    private final WorkerThread[] workerThreads;
    private final Queue<Runnable> taskQueue;

    public SimpleThreadPool(int poolSize) {
        this.poolSize = poolSize;
        workerThreads = new WorkerThread[poolSize];
        taskQueue = new LinkedList<>();

        // 创建工作线程
        for (int i = 0; i < poolSize; i++) {
            workerThreads[i] = new WorkerThread();
            workerThreads[i].start();
        }
    }

    public void submit(Runnable task) {
        synchronized (taskQueue) {
            taskQueue.offer(task);
            taskQueue.notify();  // 通知空闲线程有新任务
        }
    }

    private class WorkerThread extends Thread {
        @Override
        public void run() {
            while (true) {
                Runnable task;
                synchronized (taskQueue) {
                    while (taskQueue.isEmpty()) {
                        try {
                            taskQueue.wait();  // 等待任务
                        } catch (InterruptedException e) {
                            Thread.currentThread().interrupt();
                        }
                    }
                    task = taskQueue.poll();
                }
                task.run();  // 执行任务
            }
        }
    }
}

public class SimpleThreadPoolTest {
    public static void main(String[] args) {
        SimpleThreadPool pool = new SimpleThreadPool(4);
        for (int i = 0; i < 10; i++) {
            final int taskId = i;
            pool.submit(() -> System.out.println("Task " + taskId + " executed by " + Thread.currentThread().getName()));
        }
    }
}

```

实现线程池的主要技术包括：

- 线程管理：创建、调度、复用线程。
- 任务调度与队列管理：使用阻塞队列、调度机制来管理任务。
- 动态扩展与任务拒绝策略：根据任务量和队列容量调整线程池大小，定义任务被拒绝时的策略。
- 线程池监控与管理：通过监控线程池的状态，确保高效运行。


# 如何实现线程池？
## 线程池内部结构：
线程池：通常由一个核心线程池、最大线程池和任务队列组成。  
线程池线程：线程池维护一定数量的工作线程，来执行任务。这些线程并不直接是线程数组，而是通过 Thread 或类似的对象管理。  
任务队列：任务在没有线程可用时会被暂时保存在任务队列中，直到有线程空闲出来。  
任务调度机制：线程池管理任务的调度，包括任务的提交、执行、排队和终止等。

## 线程池工作原理: 
线程池并不是简单的线程数组，而是通过动态创建和销毁线程、使用任务队列、以及通过合理的线程管理策略来保证任务的高效执行。
线程池中的任务管理是通过一个先进先出的队列和多个线程的协作完成的。当任务提交时，它会先尝试找到空闲线程；如果线程池中没有足够的线程，会利用队列缓存任务或创建新线程；当有线程空闲时，它会继续从队列中取任务来执行。


# 线程安全和线程不安全
一个简单的比喻：

想象一个银行账户，允许多个用户同时存钱或取钱。如果账户是线程安全的，那么每个用户的操作都能正确反映账户余额的变化，不会出现少算或多算的情况。

一个类或方法被称为线程不安全，意味着当多个线程同时访问它时，可能会导致数据损坏、状态不一致或其他不可预测的错误行为。

继续上面的银行账户例子，如果账户是线程不安全的，那么当两个用户几乎同时进行存款操作时，可能会出现其中一个用户的存款丢失的情况，或者最终的账户余额不等于两个存款额的总和。

# 线程池通常使用阻塞队列来实现任务调度,为什么
阻塞队列在线程池中的优势：

- 资源效率 (CPU Utilization):

阻塞队列: 当队列为空时，尝试从队列中获取任务的 worker 线程会被阻塞 (进入等待状态)。这意味着这些线程不会占用 CPU 资源进行无意义的轮询检查，从而节省了 CPU 周期。

非阻塞队列: 如果使用非阻塞队列，worker 线程在队列为空时通常会执行一些操作 (例如不断地尝试 poll() 或 take())，即使没有任务可做。这会导致 CPU 资源的浪费，称为“忙等待”或“自旋”。

- 自然的反压机制 (Backpressure/Flow Control):

阻塞队列: 当任务提交速度超过处理速度，导致队列满时，提交任务的线程也会被阻塞 (如果队列是有限容量的)。这提供了一种天然的反压机制，防止系统被过多的任务压垮。

非阻塞队列: 非阻塞队列通常不具备内在的反压机制。如果使用无界非阻塞队列，可能会导致内存无限增长，最终导致 OOM (OutOfMemoryError)。即使使用有界非阻塞队列，也需要额外的逻辑来处理任务添加失败的情况（例如重试、丢弃等），这增加了复杂性。

- 简化编程模型:

阻塞队列: 线程池的 worker 线程只需要简单地从队列中 take() 任务，并在没有任务时自动阻塞。生产者线程只需要 put() 任务，在队列满时自动阻塞。这种模型非常简洁直观。

非阻塞队列: 使用非阻塞队列需要更复杂的逻辑来处理队列为空或满的情况。消费者需要不断尝试获取任务，并在失败时进行处理（例如短暂休眠后重试）。生产者也需要处理任务添加失败的情况。这增加了代码的复杂性和出错的可能性。


更适合大多数通用场景:

大多数应用程序不需要极低的延迟到需要牺牲 CPU 效率的程度。阻塞队列提供的效率和稳定性通常是更好的权衡


# 同步和异步，阻塞和不阻塞？

## 同步 (Synchronous) 和 异步 (Asynchronous):

*这两个概念描述的是方法调用后的行为以及结果的获取方式。*

### 同步 (Synchronous):

调用者发出调用后，必须等待被调用者执行完毕并返回结果后，才能继续执行后续操作。

就像你去餐厅点餐，服务员在你面前等待厨师做好菜，然后把菜端给你，你才能开始吃。你的行为（等待）与厨师的行为（做菜）是同步的。

在编程中，一个函数调用如果是在同步方式下进行，调用线程会阻塞，直到被调用的函数返回。

### 异步 (Asynchronous):

调用者发出调用后，不必等待被调用者执行完毕，可以立即继续执行后续操作。 被调用者的执行结果通常会通过某种机制（例如回调、Future、消息队列等）通知调用者。

就像你网购，下单后你不需要一直守着电脑等包裹送到，你可以去做其他事情。当快递到了，快递员会通知你。你的行为（下单）与物流配送是异步的。

在编程中，一个函数调用如果是在异步方式下进行，调用线程不会阻塞，它会继续执行。结果会在稍后通过某种方式通知调用者。


## 阻塞 (Blocking) 和 非阻塞 (Non-Blocking):

*这两个概念描述的是线程在等待某个操作完成时的状态。*

### 阻塞 (Blocking):

当一个线程尝试执行一个需要等待的操作时，该线程会被挂起（暂停执行），直到操作完成。 线程*不会*占用 CPU 资源进行无意义的轮询。

就像你在银行排队办理业务，如果前面还有很多人，你就只能站在那里等待，不能做其他事情（除了发呆）。

在编程中，如果一个线程调用了一个阻塞的方法，该线程会进入阻塞状态，直到满足特定条件（例如数据可用、锁被释放等）。

### 非阻塞 (Non-Blocking):

当一个线程尝试执行一个操作时，如果操作无法立即完成，线程不会被挂起，而是会立即返回一个状态信息，告知操作的结果（例如操作正在进行中、操作失败等）。 线程可以继续执行其他操作。

就像你使用自动取款机取款，如果机器繁忙，它会立即告诉你稍后再试，你不需要一直等待在那里。

在编程中，如果一个线程调用了一个非阻塞的方法，该方法会立即返回，无论操作是否完成。线程可以根据返回的状态信息决定下一步的操作（例如稍后重试）


# 4种组合

- 同步阻塞 (Synchronous Blocking): 这是最常见的情况。调用者发出调用后，需要等待被调用者执行完成并返回结果，调用线程也会被阻塞。 例如，直接调用一个执行耗时操作的函数，在函数返回前，调用线程什么都做不了。

- 同步非阻塞 (Synchronous Non-Blocking): 调用者发出调用后，被调用者立即返回，但返回的可能是操作未完成的信号，调用者需要不断轮询来检查操作是否完成。 例如，使用非阻塞 I/O 读取数据，如果数据还没准备好，读取操作会立即返回一个“数据不可用”的信号，调用者需要稍后再次尝试读取。

- 异步阻塞 (Asynchronous Blocking): 调用者发起异步调用后，依然会阻塞等待某种通知或结果，但这个等待通常不是直接等待被调用者执行完成，而是等待一个事件的发生。 一个不太常见的例子是在某些异步 I/O 模型中，虽然发起的是异步操作，但之后会调用一个阻塞的方法等待 I/O 事件的通知。

- 异步非阻塞 (Asynchronous Non-Blocking): 调用者发起异步调用后立即返回，不会阻塞，结果会通过回调、Future 等机制在稍后通知调用者。 例如，提交一个任务到线程池，或者发起一个非阻塞的异步 I/O 操作。

- 同步/异步关注的是调用方式和结果的获取。

- 阻塞/非阻塞关注的是线程在等待时的状态。

# 为什么非阻塞队列实现线程池会造成 CPU 浪费？

非阻塞队列 (忙等待): 想象一群员工在一个空仓库里等待货物。他们不停地查看仓库门口，看是否有货车到达。即使很长时间没有货车，他们也一直站在门口张望，消耗着能量（CPU）。

阻塞队列 (等待唤醒): 想象同样的员工，但现在仓库门口有一个通知系统。当没有货物时，他们可以去休息室休息。当有货车到达时，通知系统会发出信号，他们再回到仓库门口工作。他们只在需要工作的时候才消耗能量（CPU）。

# 线程池里的线程没有死亡的吗？核心线程就一定不会死亡吗？

核心线程会在以下两种情况下不会死亡：  

不会超时：默认情况下，核心线程在没有任务时不会被回收。它们会一直等待新的任务。  
任务提交时重新使用：当有新的任务提交时，如果线程池中的核心线程处于空闲状态，它会继续执行新任务。  

然而，核心线程的死亡和回收可以被手动配置。在使用 ThreadPoolExecutor 时，如果设置了 allowCoreThreadTimeOut(true)，则核心线程也会在空闲时被回收，与非核心线程类似。

```
ThreadPoolExecutor executor = new ThreadPoolExecutor(
    4,     // corePoolSize
    10,    // maximumPoolSize
    60L,   // keepAliveTime
    TimeUnit.SECONDS,
    new LinkedBlockingQueue<>(100)
);
executor.allowCoreThreadTimeOut(true);  // 允许核心线程超时并死亡

```

线程池中的线程会在以下情况下“死亡”：

- 任务完成后：当线程池中的线程执行完任务后，如果它是非核心线程并且空闲时间超过 keepAliveTime，那么该线程会被回收。  
- 线程池关闭：当调用 shutdown() 或 shutdownNow() 时，线程池会关闭，所有线程会在完成当前任务后终止。  
- 异常或错误：如果线程在执行过程中抛出未捕获的异常，且该线程没有被适当处理（例如通过 UncaughtExceptionHandler），它可能会终止。  
- 核心线程超时（如果配置了 allowCoreThreadTimeOut(true)）：如果允许核心线程超时，那么即使是核心线程也会在空闲时被回收，直到线程池中没有线程在执行任务。  

# 线程池的生命周期

线程池中的线程大致经历以下生命周期：

- 创建：线程池创建时，核心线程被创建并加入池中。  
-  任务提交：线程池从队列中取出任务，分配给空闲线程执行。如果没有空闲线程，则创建新的线程（直到达到最大线程数）。  
- 执行：线程执行任务，执行过程中可能阻塞，也可能计算等。  
- 回收：非核心线程执行完任务后，会在空闲时间超过 keepAliveTime 后死亡；核心线程如果允许超时，也会在空闲后死亡。  
- 关闭：当线程池关闭时，线程池中的所有线程会执行完当前任务后死亡。




# 线程池里的线程如何相互协作

## 共享内存
线程池中的线程可以通过访问共享变量、集合或缓存来交互。这些资源可以是堆中的对象、静态变量等。为了保证线程安全，可以使用 synchronized 关键字、 Lock 或 Atomic 类等来保护共享资源。

## 线程间通信（使用 wait / notify）
线程池中的线程可以通过 wait() 和 notify() 机制进行通信。多个线程可以通过等待和通知的方式进行协作，使得一个线程在某个条件满足时唤醒其他线程来执行。

## 消息传递和回调（使用 Future 或 CompletionService）
线程池中的线程可以通过 消息传递 的方式进行间接交互。例如，线程池任务的执行结果可以通过 Future 对象传递给提交任务的线程，或者使用 回调函数 来通知任务执行的结果。

## 线程池中的协调与同步

线程池中的多个线程可能需要协作完成某些任务，这时可以使用一些 并发工具 来进行线程间的协调。

常见的工具类：
- CountDownLatch：让多个线程等待，直到某个条件（通常是某个事件）发生。
- CyclicBarrier：让多个线程互相等待，直到所有线程都达到某个屏障点。
- Semaphore：控制访问共享资源的线程数量。
- Exchanger：让两个线程交换数据。


# 线程池和Springboot里的数据库连接池是一回事吗？

线程池 和 数据库连接池 在 Spring Boot 中虽然都是 池化技术，但它们的目标、使用场景和实现方式有所不同。它们都依赖于池化的思想：通过预先创建一定数量的资源并复用它们来提高性能，避免频繁的资源创建和销毁开销，但它们关注的资源和用途不同。

![线程池和Springboot](/img/threadpool-vs-connectionpool.png)
# 其它
1. 如何区分核心线程和非核心线程？是否存在某个字段表示线程是核心？  
很遗憾，在 java.util.concurrent.ThreadPoolExecutor 的公共 API 中，并没有直接的字段或方法来判断一个线程当前是核心线程还是非核心线程。

ThreadPoolExecutor 内部维护了核心线程和当前线程池大小的信息，但这属于其内部实现细节，并没有暴露出来供外部直接访问。

为什么没有这样的字段？

动态性: 线程池中的线程角色在运行时可能是动态变化的。一个线程最初可能作为核心线程启动，但如果设置了 allowCoreThreadTimeOut(true)，它也可能因为超时而被回收，然后再被创建为新的核心线程或非核心线程。

关注行为而非标签: ThreadPoolExecutor 的设计更关注线程池的行为和管理，而不是给每个线程打上一个静态的 "核心" 或 "非核心" 的标签。 重要的是线程池如何根据配置参数来创建、管理和回收线程。


2. 什么是任务？  
任务指需要执行的某项工作或功能。

任务本身可以是非常抽象的。它不仅仅是代码块，还可以表示为业务逻辑单元。比如，一个任务可以是“计算任务”、“I/O 任务”、“请求处理任务”等，而这些任务可以由不同的代码片段来实现。因此，任务本身更多是代表一种待执行的工作，而代码只是实现这种工作的方式之一。


在并发编程中，任务 是指需要执行的工作，可以是业务逻辑、计算、I/O 操作等。它可以被表示为：

代码块（如 Runnable 或 Callable），通常由线程池或执行器去执行。
抽象概念，即任务是系统需要完成的“工作单元”，它不仅仅是代码，也可以表示业务流程或某个操作。




# 参考资料

