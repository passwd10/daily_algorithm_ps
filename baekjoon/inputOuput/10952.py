import sys

for line in sys.stdin:
  a, b = map(int, line.split(' '))
  if a == 0 and b == 0:
    sys.exit()
  else:
    print(a + b)