#!/bin/sh

wget --output-document=inputFile.jpg $1

python /home/ketanjog/graphiti/Real-ESRGAN/inference_realesrgan.py -n RealESRGAN_x4plus_anime_6B -i inputFile.jpg
