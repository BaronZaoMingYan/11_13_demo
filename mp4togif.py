import os
import cv2
import imageio

def convert_mp4_to_gif(source_dir):
    for filename in os.listdir(source_dir):
        # 检查文件是否为 MP4
        if filename.endswith('.mp4'):
            # 构建完整的文件路径
            file_path = os.path.join(source_dir, filename)
            # 构建输出 GIF 文件名
            output_file = os.path.splitext(filename)[0] + '.gif'
            output_path = os.path.join(source_dir, output_file)

            try:
                # 读取 MP4 文件
                cap = cv2.VideoCapture(file_path)
                frames = []
                fps = cap.get(cv2.CAP_PROP_FPS)

                while cap.isOpened():
                    ret, frame = cap.read()
                    if not ret:
                        break
                    # 将 BGR 转换为 RGB（因为 OpenCV 默认读取为 BGR）
                    frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
                    frames.append(frame_rgb)

                cap.release()

                # 输出为 GIF，调整 'duration'以控制帧速率
                imageio.mimsave(output_path, frames, format='GIF', duration=1/5)
                print(f"Converted {filename} to {output_file}")

            except Exception as e:
                print(f"Failed to convert {filename}: {e}")

# 指定你的目录
source_directory = r'D:\项目\11_13_demo\static\video01'
convert_mp4_to_gif(source_directory)
