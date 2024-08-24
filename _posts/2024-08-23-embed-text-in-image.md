---
layout: post
title:  在图片中隐藏文字
tags: embed hidden-text Steganography statble-diffusion control-net 文本嵌入到图片背景 融入 工具
---  
# 关键技术：
- Stable Diffusion (SD)： 将文本描述转换为图像的开源模型。
- ControlNet (CN)： 精确引导 SD 模型输出的技术。文章中使用的是一种擅长生成自然图像的 ControlNet，可以将图像的对比度信息转化为类似二维码的黑白图案，进而嵌入文本。

# 实现方法：
 使用 Modal 平台将计算任务转移到远程 A10G GPU 上，并编写了脚本来自动生成嵌入文本的图像。
 或者使用现成的huggingface平台，
# 不足之处
 每次还得为了不同的文本制作背景图片，这个步骤.
我们需要写一个脚本根据文本生成文本对应的图片，
这个脚本仅供参考：
```
from PIL import Image, ImageDraw, ImageFont

def create_image_with_text(text):
  """
  Creates an image with the specified text on a black background.

  Args:
    text: The text to be displayed on the image.

  Returns:
    An Image object.
  """

  # Create a new black image
  img = Image.new('RGB', (500, 100), color = (0, 0, 0))
  draw = ImageDraw.Draw(img)

  # Choose a font (you might need to download and install this font)
  font = ImageFont.truetype("impact.ttf", 60) 

  # Calculate the text size using the font object
  text_width, text_height = font.getsize(text)

  # Calculate the position to center the text
  x = (img.width - text_width) / 2
  y = (img.height - text_height) / 2

  # Draw the text in white
  draw.text((x, y), text, font=font, fill=(255, 255, 255))

  return img

# Example usage:
text = input("Enter your text: ")
image = create_image_with_text(text)
image.save("output.png")
```

然后到[Illusion Diffusion](https://huggingface.co/spaces/AP123/IllusionDiffusion) 把生成黑白文本图片拖入到模式，就可以得到想要的效果。

![美](/img/mei.webp)

# 参考资料
 - [隐藏文字](https://www.factsmachine.ai/p/hidden-in-plain-sight)
 - [实现](https://github.com/jlowin/aimages)
 - [Illusion Diffusion](https://huggingface.co/spaces/AP123/IllusionDiffusion)