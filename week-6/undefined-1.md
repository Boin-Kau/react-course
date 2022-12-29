---
description: 페이지 처리를 프론트와 백엔드 모두 작업이 필요한 영역입니다. 각 영역에서 어떻게 페이징을 구현하는지 알아봅시다.
---

# 페이징

#### 페이징 혹은 무한스크롤은 어떤 경우에 필요할까?

* 방대한 규모의 데이터를 쪼개서 네트워크로 전달하고, 화면에 보여주고 싶을 때 사용합니다.&#x20;



#### 백엔드 개발에서의 페이징 처리

<figure><img src="../.gitbook/assets/스크린샷 2022-10-22 오전 11.22.00.png" alt=""><figcaption></figcaption></figure>

#### 프론트엔드 개발에서의 페이징 처리

* Pagination 컴포넌트를 통한 페이징 처리
  * [Pagination - Ant Design](https://ant.design/components/pagination/)
* **무한스크롤**을 통한 페이징 처리
  * [react-intersection-observer](https://www.npmjs.com/package/react-intersection-observer)
