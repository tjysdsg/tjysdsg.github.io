---
title: Set Basic Data Type Attributes in C
layout: post
author: TJYSDSG
---

An Example

```
typedef signed int __attribute__((mode(TI)))   int128_t;
typedef unsigned int __attribute__((mode(TI)))   uint128_t;
typedef float __attribute__((__mode__(__SD__)))   _Decimal32;
typedef float __attribute__((__mode__(__DD__)))   _Decimal64;
typedef float __attribute__((__mode__(__TD__)))   _Decimal128;
The below list describes all of the possible parameters used by the mode attribute.
```

What does `__XXX__` mean

- BI: 1 Bit
- QI: Quarter Integer; 1 byte
- HI: Half Integer; 2 bytes
- PSI: Partial Single Integer; 4 bytes; not all bits used
- SI: Single Integer; 4 bytes
- PDI: Partial Double Integer; 8 bytes; not all bits used
- DI: Double Integer; 8 bytes (64-bits)
- TI: Tetra Integer; 16 bytes (128-bits)
- OI: Octa Integer; 32 bytes (256-bits)
- XI: Hexadeca Integer; 64 bytes (512-bits)
- QF: Quarter Floating; 1 byte quarter-precision float-point
- HF: Half Floating; 2 byte half-precision float-point
- TQF: Three Quarter Floating; 3 byte three-quarter-precision float-point
- SF: Single Floating; 4 byte single-precision float-point
- DF: Double Floating; 8 byte double-precision float-point
- XF: Extended Floating; 12 byte extended-precision float-point
- TF: Tetra Floating; 16 byte tetra-precision float-point
- SD: Single Decimal Floating; 4 byte (32-bit) decimal float-point
- DD: Double Decimal Floating; 8 byte (64-bit) decimal float-point
- TD: Tetra Decimal Floating; 4 byte (128-bit) decimal float-point
- CQI: Complex Quarter Integer; 1 byte
- CHI: Complex Half Integer; 2 bytes
- CSI: Complex Single Integer; 4 bytes
- CDI: Complex Double Integer; 8 bytes
- CTI: Complex Tetra Integer; 16 bytes
- COI: Complex Octa Integer; 32 bytes
- QC: Quarter Complex; 1 byte quarter-precision complex float-point
- HC: Half Complex; 2 byte half-precision complex float-point
- SC: Single Complex; 4 byte single-precision complex float-point
- DC: Double Complex; 8 byte double-precision complex float-point
- XC: Extended Complex; 12 byte extended-precision complex float-point
- TC: Tetra Complex; 16 byte tetra-precision complex float-point
- QQ: Quarter-Fractional; 1-byte signed fractional number
- HQ: Half-Fractional; 2-byte signed fractional number
- SQ: Single-Fractional; 4-byte (32-bit) signed fractional number
- DQ: Double-Fractional; 8-byte (64-bit) signed fractional number
- TQ: Tetra-Fractional; 16-byte (128-bit) signed fractional number
- UQQ: Unsigned Quarter-Fractional; 1-byte unsigned fractional number
- UHQ: Unsigned Half-Fractional; 2-byte unsigned fractional number
- USQ: Unsigned Single-Fractional; 4-byte (32-bit) unsigned fractional number
- UDQ: Unsigned Double-Fractional; 8-byte (64-bit) unsigned fractional number
- UTQ: Unsigned Tetra-Fractional; 16-byte (128-bit) unsigned fractional number
- HA: Half-Accumulator; 2-byte (16-bit) signed accumulator
- SA: Single-Accumulator; 4-byte (32-bit) signed accumulator
- DA: Double-Accumulator; 8-byte (64-bit) signed accumulator
- TA: Tetra-Accumulator; 16-byte (128-bit) signed accumulator
- UHA: Unsigned Half-Accumulator; 2-byte (16-bit) unsigned accumulator
- USA: Unsigned Single-Accumulator; 4-byte (32-bit) unsigned accumulator
- UDA: Unsigned Double-Accumulator; 8-byte (64-bit) unsigned accumulator
- UTA: Unsigned Tetra-Accumulator; 16-byte (128-bit) unsigned accumulator
- CC: Condition Code
- BLK: Block
- VOID: Void
- P: Address mode
- V4SI: Vector; 4 single integers
- V8QI: Vector; 8 single-byte integers
- BND32: 32-bit pointer bound
- BND64: 64-bit pointer bound
