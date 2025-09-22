---
title: Benchmarks
---

# Benchmarks

Atomic packages include simple micro‑benchmarks for quick performance checks.

## Run

```bash
# From each package directory
composer benchmark

# Or run the benchmark script directly
php benchmarks/run-benchmarks.php
```

## Example Results

```text
Kernel Benchmark:
benchKernelNoMiddleware       :  9,077,442 ops/sec
benchKernelWithMiddleware     :  3,122,516 ops/sec

Router Benchmark:
benchStaticExactMatch         :   ~440,000 ops/sec
benchDynamicMatch             :   ~326,000 ops/sec

Container Benchmark:
benchGetSingleton             : ~3,400,000 ops/sec
benchGetFactory               : ~1,800,000 ops/sec
```

