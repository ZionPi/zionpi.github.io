---
layout: post
title: nat,stun,ice,p2p及其它
tags: nat stun turn ice p2p
---
# 如何知道我们当前设备所处的网络环境？

在网络世界中，我们常常会遇到 NAT (Network Address Translation，网络地址转换) 这个神奇的机制。
它就像一个隐形的守护者，默默地将我们的私网 IP 地址转换成公网 IP 地址，让我们能够畅游互联网。  
然而，NAT 也像一座无形的墙，阻隔了我们与其他设备直接建立连接的渴望，特别是对于那些需要 P2P 连接的应用，例如多人游戏、视频通话、文件共享等。
为了了解我们身处的网络环境，尤其是 NAT 的类型，我们需要借助一些工具和技术。
 其中，STUN (Session Traversal Utilities for NAT) 协议就是一个很好的帮手。

# STUN 协议：NAT 的侦察兵

STUN 协议就像一个网络侦察兵，它可以帮助我们发现 NAT 的存在和类型，并获取我们在公网上的 IP 地址和端口号 (也就是反射地址)。

工作原理：
我们的设备向一个位于公网上的 STUN 服务器发送 STUN 请求。
STUN 服务器接收到请求后，会分析请求的来源 IP 地址和端口号，以及请求数据包经过的 NAT 路径。
STUN 服务器会向我们的设备发送一个响应，其中包含：
NAT 类型： 例如，Full Cone NAT、Restricted Cone NAT、Port Restricted Cone NAT、Symmetric NAT 等。

公网 IP 地址和端口号： 我们在公网上的 IP 地址和端口号，也就是 NAT 分配给我们的反射地址。

#  如何使用 STUN 协议：
使用命令行工具：
在 Linux 或 macOS 上，可以使用 stund 命令行工具来发送 STUN 请求。
在 Windows 上，可以使用 stunclient 或 pystun 命令行工具。
- 使用在线 STUN 测试工具： 网上有很多在线 STUN 测试工具，
例如 https://www.stunprotocol.org/、https://www.canyouseeme.org/ 等。
- 使用编程语言编写 STUN 客户端： 
许多编程语言都提供了 STUN 客户端库，例如 Python 的 pystun 库。

# 突破 NAT 的利器：ICE 框架
了解了 NAT 类型之后，我们就可以使用 ICE (Interactive Connectivity Establishment，交互式连接建立) 框架来建立 P2P 连接。 ICE 框架就像一个万能钥匙，它可以帮助我们打开 NAT 的大门，建立直接连接。

# ICE 框架的工作原理：
- 收集候选地址： 每个设备都会收集一组候选地址，包括本地地址、反射地址（通过 STUN 协议获取）和中继地址 (如果可用)。
- 候选地址交换： 两个设备会交换彼此的候选地址列表。
- 连接检查： 两个设备会依次尝试使用不同的候选地址组合建立连接，直到找到一个可以成功建立连接的组合。

ICE 框架会根据 NAT 类型和网络环境，自动选择最合适的连接方式，例如：

如果两个设备之间可以直接建立连接，则使用直接连接。
如果两个设备可以使用 STUN 协议获取的反射地址建立连接，则使用反射连接。

如果两个设备无法直接建立连接或反射连接，则使用 TURN (Traversal Using Relays around NAT) 服务器来中继流量。

"反射地址" 是指 位于 NAT 后面的设备在公网上的 IP 地址和端口号，它是由 NAT 设备分配的。

# NAT 设备
全称是 网络地址转换器（Network Address Translator），是一种网络设备，它位于你的私有网络和公共网络之间，负责将私有 IP 地址转换为公共 IP 地址，并进行端口映射，以便你的设备可以与公共网络进行通信。

# 常见的 NAT 设备：
家用路由器： 几乎所有家用路由器都内置了 NAT 功能，用于将家庭网络中的设备连接到互联网。
企业级路由器和防火墙： 企业级路由器和防火墙通常也具有 NAT 功能，用于将企业网络连接到互联网，并提供更高级的安全防护。
运营商网络设备： 移动运营商和互联网服务提供商 (ISP) 使用 NAT 来为多个用户共享同一个公共 IP 地址，以节省 IP 地址资源。

# traceroute
traceroute 命令可以帮助你 推测 NAT 设备的位置，但 并不能直接确定 哪个设备是 NAT 设备。


# 总结：
通过 STUN 协议，我们可以了解我们所处的 NAT 类型，并使用 ICE 框架来建立 P2P 连接。 这些技术可以帮助我们克服 NAT 的障碍，实现更快速、更可靠的网络通信。