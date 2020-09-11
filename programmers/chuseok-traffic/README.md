# [추석 트래픽](https://programmers.co.kr/learn/courses/30/lessons/17676)

## 1. 이해

- 작년 추석인 9월 15일 로그데이터를 분석한 후 처리량 계산
- 초당 최대 처리량 = (요청 응답 완료 여부에 관게없이) 임의 시간부터 1초간 처리하는 요청의 최대개수
- 응답완료시간(S) = 2016-09-15 hh:mm:ss.sss (고정길이)
- 처리시간(T) = 0.312s (최대 소수점 셋째 자리까지 기록)
- 처리시간은 0.001 ~ 3.000
- lines 배열은 각 로그 문자열마다 요청에 대한 S 와 T 가 공백으로 구분
- lines 배열은 S를 기준으로 오름차순 정렬
- 처리가 끝나는 시점부터 + 1초를 했을때 그 안에 얼마나 많은 처리가 시작되는지 찾기

## 2. 계획

1. 시간을 초 단위로 변경한다.
2. 응답완료시간 + 1을 하고 그 안에 몇개의 처리시작시간이 들어가는지 체크한다
3. 최대값을 출력한다.

## 3. 실행

## 4. 반성