# [네트워크](https://programmers.co.kr/learn/courses/30/lessons/43162)

## 1. 이해

- 자신은 항상 1이다

## 2. 계획

1. 자신의 인덱스를 제외하고 1이 되는 가장 가까운 인덱스를 만나면 해당 컴퓨터로 이동
2. 방문한 컴퓨터는 true로 체크한다. 1번을 반복하여 계속 다른 컴퓨터를 방문한다.
3. 최상위 컴퓨터 방문 이후 true체크되지 않은 컴퓨터를 방문하여 1,2번 반복
4. 최상위 컴퓨터를 방문할 때 마다 네트워크 하나가 생성되는것이므로 answer += 1

## 3. 실행

## 4. 반성
