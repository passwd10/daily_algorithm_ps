# [캐시](https://programmers.co.kr/learn/courses/30/lessons/17680)

## 1. 이해

- 도시이름 대소문자 구분하지 않음
- 영어로만 되어있음
- cache miss(캐시 사용 안할때) - 5
- cache hit(캐시 사용할 떄) - 1

## 2. 계획

1. 도시이름을 소문자로 변경한다
2. 캐시크기만큼 앞에서부터 순서대로 도시를 입력받는다 +5
3. 캐시크기가 가득 차면 그 다음 도시가 캐시안에 있는지 확인한다
4. 캐시안에 있으면 + 1, 없으면 캐시 맨앞의 도시를 제외하고 해당 도시를 캐시에 넣고 +5

## 3. 실행

## 4. 반성

- edge case 잘 생각할것
