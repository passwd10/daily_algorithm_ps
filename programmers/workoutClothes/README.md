# [체육복](https://programmers.co.kr/learn/courses/30/lessons/42862)

## 1. 이해

- 학생들의 번호는 체격순으로 매겨져있다.
- 바로 앞이나 뒤에있는 학생에게만 체육복을 빌려줄 수 있다.
- 여벌의 체육복은 한명에게만 줄 수 있다

n | lost | reserve | return
-|-|-|-
5 |[2, 4] | [1, 3, 5] | 5
5 |[2, 4] | [3] | 4
3 |[3] | [1] | 2

## 2. 계획

1. 학생수 n의 크기를 가진 student 배열을 만들고 1로 채워준다.
2. student 배열을 돌면서 lost배열의 요소와 일치하는 index를 만나면 -1, reserve 배열의 요소와 일치하는 index를 만나면 +1 을 해준다.
3. student 배열의 첫번째와 두번째 요소를 비교하여 하나가 0이고 하나가 2이면 둘을 1로 바꿔준다. 두번째 세번째, 세번쨰 네번째도 반복하여 바꿔준다.
4. student 배열의 1 이상의 값을 가진 요소의 개수를 반환한다.

## 3. 실행

## 4. 반성
