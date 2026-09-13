---
title: "Projects"
description: "Selected projects I've built, with links to the code"
---

A few things I've built for coursework, internships, and research. Source for everything is on [GitHub](https://github.com/Zain-Mahmoud).

## CUDA Deep Learning Framework

**C++ / CUDA** — [github.com/Zain-Mahmoud/cuda_nn](https://github.com/Zain-Mahmoud/cuda_nn)

A fully connected neural network implemented from scratch in CUDA, focusing on the primitives that actually matter for training speed.

- Core nn primitives with forward and backward passes for 6 activations: ReLU, Leaky ReLU, Tanh, GELU, Swish, Softmax
- Naive and tiled shared-memory matrix multiplication kernels, up to **99.92%** faster than a CPU baseline on 1024×1024 matmul
- Up to **99.94%** runtime reduction over CPU implementations through GPU parallelization

## Distributed ML Parameter Server

**C / Bash** — [github.com/Zain-Mahmoud/distributed-ml-param-server](https://github.com/Zain-Mahmoud/distributed-ml-param-server)

A distributed machine learning parameter server that simulates a full logistic-regression training run using SGD.

- Non-blocking buffering system that lets the server multiplex I/O across many concurrent clients
- Baseline C implementation of logistic regression training over generated data
- Bash test suite that simulates concurrent clients connecting to the server, catching race conditions and improving reliability

## Egyptian National ID OCR

**Python** — [github.com/Zain-Mahmoud/ocr-id-parsing](https://github.com/Zain-Mahmoud/ocr-id-parsing)

OCR pipeline for Egyptian national IDs, built for eKYC authentication at the Egyptian Stock Exchange.

- Post-trained YOLO for field localization, EasyOCR for character recognition
- Fine-tuned Qwen3-2B VLM (LoRA) as a confidence-gated fallback: VLM inference only runs below set confidence thresholds, amortizing cost
- Keeps the primary pipeline CPU-only under limited GPU capacity

Interested in more? All of my public work is on [GitHub](https://github.com/Zain-Mahmoud).
