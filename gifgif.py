import os
from PIL import Image, ImageSequence

# Path to the directory containing GIFs
path_to_gifs = r"D:\项目\11_13_demo\static\video01"

# List all files in the directory
for filename in os.listdir(path_to_gifs):
    if filename.endswith(".gif"):
        input_file = os.path.join(path_to_gifs, filename)
        output_file = os.path.join(path_to_gifs, f"looped_{filename}")

        with Image.open(input_file) as img:
            # Extract frames
            frames = [frame.copy() for frame in ImageSequence.Iterator(img)]

            # Save a new GIF with loop set to 0
            frames[0].save(output_file, save_all=True, append_images=frames[1:], loop=0, duration=img.info.get('duration', 100))

        print(f"Processed: {filename}")
