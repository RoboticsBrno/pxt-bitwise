{
  bitwise.or(0x1000, 0x10) === (0x1000 | 0x10);
  bitwise.and(0x1010, 0x10) === (0x1010 & 0x10);
  bitwise.xor(0x1000, 0x1001) === (0x1000 ^ 0x1001);
  bitwise.not(0x01) === ~0x01;
}