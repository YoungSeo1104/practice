# CLAUDE.md

이 파일은 이 저장소의 코드로 작업할 때 Claude Code (claude.ai/code)에 대한 지침을 제공합니다.

## 프로젝트 개요

**나의 버킷 리스트**는 개인의 인생 목표를 추적하고 관리하는 바닐라 JavaScript 웹 애플리케이션입니다. 실시간 통계, 필터링, LocalStorage를 통한 자동 영구 저장 기능이 있습니다.

**목적**: 사용자가 깔끔하고 직관적인 인터페이스로 개인의 인생 목표(버킷 리스트)를 체계적으로 관리합니다. 목표를 추가, 수정, 삭제할 수 있으며, 완료 상태를 표시하고 자동으로 진행 상황을 추적합니다.

**기술 스택**: HTML5, CSS3, JavaScript (ES6+), Tailwind CSS (CDN)

**주요 특징**:
- 🎯 외부 의존성 없음 (순수 바닐라 JavaScript)
- 💾 완벽한 오프라인 지원 (LocalStorage 기반)
- 📱 완전 반응형 디자인
- ⚡ 서버 불필요, 즉시 업데이트
- 🎨 Tailwind CSS와 커스텀 애니메이션으로 현대적인 UI

## 시작하기

### 애플리케이션 실행

다음 중 하나의 방법을 선택하세요:

1. **브라우저 직접 실행** (가장 간단): `index.html`을 브라우저에서 직접 열기
2. **Live Server 사용**: `index.html` 우클릭 → "Open with Live Server" (VS Code)
3. **Python 서버**: `python -m http.server 8000` 후 `http://localhost:8000` 접속

빌드 단계, 의존성, 서버가 필요 없습니다. 완전한 정적 애플리케이션입니다.

## 아키텍처

### 파일 구조

- **index.html** — 단일 페이지 DOM 구조, Tailwind CSS (CDN) 사용
- **js/storage.js** — `BucketStorage` 객체: LocalStorage CRUD 작업, 필터링, 통계
- **js/app.js** — `BucketListApp` 클래스: DOM 이벤트 처리, 렌더링, 사용자 상호작용
- **css/styles.css** — Tailwind을 보완하는 커스텀 CSS (애니메이션, 오버라이드)

### 핵심 설계 패턴

**관심사의 분리**:
- **BucketStorage** (js/storage.js) — 순수 데이터 로직. 모든 영구 저장과 데이터 변환을 처리합니다. DOM 접근 불가.
- **BucketListApp** (js/app.js) — UI와 이벤트 로직. DOM 요소를 캐싱하고, 이벤트를 바인딩하고, BucketStorage를 호출하여 데이터를 변경하며, 상태 변경 시 다시 렌더링합니다.

두 모듈은 메서드 호출로만 통신하며, 앱은 저장소 데이터를 직접 변경하지 않습니다.

## 기능 상세 분석

### 핵심 기능

1. **항목 추가** (추가)
   - 사용자가 폼에 목표 텍스트 입력
   - 각 항목은 고유한 타임스탐프 기반 ID 부여
   - 항목은 목록 맨 위에 나타남 (최신순)
   - 제출 후 입력 필드 초기화, 포커스 복원

2. **항목 완료/미완료 표시** (완료)
   - 체크박스 클릭으로 완료 상태 전환
   - 완료된 항목은 체크마크(✓)와 취소선 표시
   - `completedAt` 타임스탐프는 완료 시 기록, 미완료 시 초기화
   - 시각적 피드백: 체크박스 색상 변경 (흰색 → 초록색)

3. **항목 수정** (수정)
   - 모달 대화상자가 현재 제목 텍스트와 함께 열림
   - 사용자가 텍스트를 수정하고 제출
   - 취소 버튼 또는 모달 외부 클릭으로 닫을 수 있음
   - 수정 사항은 LocalStorage에 즉시 저장

4. **항목 삭제** (삭제)
   - 확인 대화상자로 실수로 인한 삭제 방지
   - 확인 메시지에 항목 제목 표시
   - 삭제된 항목은 저장소에서 즉시 제거

5. **필터 보기** (필터)
   - **전체**: 모든 항목 표시
   - **진행중**: 미완료 항목만 표시
   - **완료**: 완료된 항목만 표시
   - 활성 필터 버튼은 파란색으로 강조
   - 클릭 시 필터 상태 즉시 업데이트

6. **실시간 통계** (통계)
   - **전체**: 모든 항목의 개수
   - **완료**: 완료된 항목의 개수
   - **진행중**: 미완료 항목의 개수
   - **달성률**: 백분율 (0-100%)
   - 모든 작업 후 즉시 업데이트

## 핵심 구현 상세

### 데이터 모델

각 버킷 항목은 다음 속성을 가진 JavaScript 객체입니다:

```javascript
{
  id: "1730880000000",           // 타임스탐프 기반 고유 ID (Date.now().toString())
  title: "목표 텍스트",          // 사용자 입력 (앞뒤 공백 제거)
  completed: false,              // 완료 여부
  createdAt: "2025-11-06T...",  // ISO 8601 타임스탐프 (new Date().toISOString())
  completedAt: null              // 완료 시 ISO 8601 타임스탐프, 미완료 시 null
}
```

**저장소 상세**:
- 모든 항목은 `localStorage['bucketList']`에 JSON 배열로 저장
- 로드 순서: 삽입 순서대로 검색 (unshift() 사용으로 최신순)
- 저장소 용량: `localStorage`는 도메인당 약 5-10MB 지원; 일반적인 버킷 리스트는 1KB 미만
- 서버 불필요—모든 데이터가 브라우저에 존재

**ID 생성 방식**:
- 단순성을 위해 `Date.now().toString()` 사용
- 단일 사용자 시나리오에 충분 (실제로 충돌 위험 없음)
- 대략적인 시간순 정렬 가능 (더 오래된 ID가 더 작은 숫자)

### 이벤트 처리 아키텍처

**이벤트 유형**:

1. **폼 제출** (`#bucketForm`)
   - `addEventListener('submit')` 캐시된 폼 요소에 연결
   - `handleAdd(e)` 호출 → 검증 → `BucketStorage.addItem()` → `render()`

2. **필터 버튼 클릭** (`.filter-btn`)
   - `addEventListener('click')` 각 필터 버튼에 연결
   - `data-filter` 속성 읽기 ('all', 'active', 'completed')
   - `currentFilter` 상태 업데이트 및 시각적 활성화 상태 변경
   - 새 필터로 `render()` 호출

3. **항목 작업** (인라인 `onclick`)
   - 체크박스: `onclick="app.handleToggle(id)"`
   - 수정 버튼: `onclick="app.openEditModal(id, title)"`
   - 삭제 버튼: `onclick="app.handleDelete(id, title)"`
   - 전역 `app` 인스턴스 사용 (`DOMContentLoaded`에서 생성)
   - 작업 핸들러는 UI를 업데이트하기 위해 `render()` 호출

4. **모달 상호작용**
   - 폼 제출: `handleEditSubmit(e)` → 검증 → `BucketStorage.updateItem()` → `closeEditModal()` → `render()`
   - 취소 버튼: `closeEditModal()`
   - 배경 클릭: `closeEditModal()` (모달 외부 클릭)

**이벤트 흐름 예시** (항목 추가):
```
사용자가 입력 후 Enter 키 누름
→ 폼 'submit' 이벤트 발생
→ handleAdd() 검증
→ BucketStorage.addItem() localStorage에 저장
→ app.render() DOM 재생성
→ UI에 새 항목 목록과 업데이트된 통계 표시
```

### 렌더링 파이프라인

`BucketListApp.render()`는 UI 업데이트의 **유일한 진실의 원천**입니다:

1. **통계 업데이트**: `BucketStorage.getStats()` 호출 → 카운터 DOM 요소 업데이트
2. **필터링된 목록 가져오기**: `BucketStorage.getFilteredList(currentFilter)` 호출 → 표시할 항목 획득
3. **HTML 생성**: `createBucketItemHTML()` 사용하여 각 항목 맵핑 → HTML 문자열 생성
4. **DOM 업데이트**:
   - 목록이 비어있으면: 항목 숨기기, 빈 상태 메시지 표시
   - 목록에 항목이 있으면: 항목 표시, 빈 상태 숨기기
5. **애니메이션**: DOM 변경 시 CSS 전환 트리거 (0.3초 슬라이드 인)

**이 패턴이 작동하는 이유**:
- 상태 동기화 문제 없음 (render는 항상 저장소에서 읽음)
- 모든 작업 후 render() 호출 안전 (멱등성)
- 빈 상태 자동 관리
- 통계는 항상 목록 내용과 일치

### 보안

**XSS 방지**:
- 사용자 입력은 `createBucketItemHTML()`에서 렌더링하기 전에 `escapeHtml()`을 통해 HTML 이스케이프
- 방법: 임시 DOM 요소 생성 → `textContent` 설정 → `innerHTML` 읽기 (안전)
- 항목 제목을 통한 악성 스크립트 주입 방지

**예시**:
```javascript
// 입력: <img src=x onerror="alert('xss')">
// 이스케이프 후: &lt;img src=x onerror=&quot;alert(&#x27;xss&#x27;)&quot;&gt;
// 일반 텍스트로 렌더링됨, 실행되지 않음
```

### 저장소 영구 저장

**저장 패턴**:
- `BucketStorage.save()` 모든 변경 후 호출됨 (추가, 수정, 삭제, 토글)
- `try-catch`를 사용하여 `localStorage` 용량 초과 오류를 우아하게 처리
- 부울 성공 플래그 반환 (실패 시 콘솔에 기록)

**로드 패턴**:
- `BucketStorage.load()` 각 작업 시작 시 호출
- 인메모리 캐시 없음 (항상 저장소에서 최신 데이터 읽음)
- 여러 앱 인스턴스가 동기화 유지 가능 (여러 탭에서 열린 경우)

**예시 흐름**:
```javascript
// 사용자가 완료 토글
app.handleToggle(id)
→ BucketStorage.toggleComplete(id)
  → load() → 항목 찾기 → completed + completedAt 업데이트 → save()
→ app.render()
  → load() → getStats() → getFilteredList() → DOM 업데이트
```

## 코드 구성 및 모듈 책임

### `js/storage.js` — BucketStorage 객체

**목적**: 순수 데이터 계층. 모든 영구 저장 로직, CRUD 작업, 계산이 여기 있습니다. DOM 의존성 없음.

**주요 메서드**:
- `load()` — localStorage에서 모든 항목 검색
- `save(bucketList)` — 배열을 localStorage에 저장
- `addItem(title)` — 타임스탐프 ID를 가진 새 항목 생성
- `updateItem(id, newTitle)` — 항목 제목 수정
- `deleteItem(id)` — 목록에서 항목 제거
- `toggleComplete(id)` — 완료/미완료 표시 + completedAt 설정/초기화
- `getStats()` — { total, completed, progress, completionRate } 계산
- `getFilteredList(filter)` — 'all' | 'active' | 'completed'와 일치하는 항목 반환

**설계 주의사항**:
- 저장된 상태 없음 (항상 localStorage에서 읽음)
- 모든 작업 원자적 (load → 변환 → save)
- 에러 처리는 콘솔에 조용히 기록 (우아한 성능 저하)

### `js/app.js` — BucketListApp 클래스

**목적**: UI 계층. DOM 캐싱, 이벤트 바인딩, 렌더링, 사용자 상호작용.

**주요 메서드**:
- `init()` — 진입점: DOM 캐싱, 이벤트 바인딩, 초기 렌더링
- `cacheElements()` — DOM 노드 참조 저장 (폼, 통계, 목록, 모달, 필터)
- `bindEvents()` — 캐시된 요소에 이벤트 리스너 연결
- `handleAdd(e)` — 폼 제출 → 항목 추가
- `handleFilter(e)` — 필터 버튼 클릭 → 뷰 업데이트
- `handleToggle(id)` — 체크박스 클릭 → 완료 표시
- `handleDelete(id, title)` — 삭제 버튼 → 확인으로 제거
- `openEditModal(id, title)` / `closeEditModal()` — 모달 상태
- `handleEditSubmit(e)` — 모달 폼 → 항목 업데이트
- `createBucketItemHTML(item)` — 항목 HTML 생성 (이스케이싱 포함)
- `escapeHtml(text)` — XSS 방지 헬퍼
- `updateStats()` — 통계 카운터 DOM 업데이트
- `render()` — 마스터 재렌더링: 통계 + 필터링된 목록 + 빈 상태

**설계 주의사항**:
- 상태 변경 후 단일 `render()` 호출 (멱등성)
- 모든 DOM 참조 한 번 캐싱 (효율적)
- 인라인 `onclick` 핸들러에서 사용할 전역 `app` 인스턴스

### `index.html` — UI 구조

**섹션**:
1. **헤더**: 제목 + 설명
2. **통계 박스**: 4개 카운터 (전체, 완료, 진행중, 달성률)
3. **입력 폼**: 텍스트 입력 + 추가 버튼
4. **필터 버튼**: `data-filter` 속성을 가진 3개 버튼
5. **목록 컨테이너**: 동적 항목 (render()에서 업데이트)
6. **빈 상태**: 항목이 없을 때 숨겨진 메시지
7. **수정 모달**: 항목 제목 편집용 폼

**설계 패턴**:
- 레이아웃/색상용 Tailwind CSS (커스텀 레이아웃 CSS 없음)
- 라우팅용 `data-filter` 속성
- JS 캐싱용 모든 상호작용 요소에 `id` 속성
- 동적으로 생성된 HTML에 필요한 인라인 `onclick` 핸들러는 전역 `app` 메서드 호출

### `css/styles.css` — 커스텀 스타일링

**목적**: 애니메이션, 반응형 조정, 다크 모드, 커스텀 컴포넌트 상태.

**컴포넌트**:
- `.filter-btn` / `.filter-btn.active` — 필터 버튼 상태 스타일
- `.bucket-item` — 슬라이드 인 애니메이션이 있는 목록 항목 컨테이너
- 스크롤바 스타일링
- 모바일 반응형 (flex-direction 변경)
- 모달 애니메이션 (페이드 + 스케일)
- 통계 카운터 전환
- 다크 모드 미디어 쿼리 지원

## 애플리케이션 확장하기

### 새 기능 추가하기

**데이터 로직인 경우** (통계, 필터링, 새 계산):
1. `BucketStorage` 객체에 메서드 추가
2. 필요에 따라 `BucketListApp` 메서드에서 호출
3. 예: 타임라인 뷰용 `BucketStorage.getItemsByDate(startDate)`

**UI 로직인 경우** (새 버튼, 입력 필드, 모달):
1. `index.html`에 HTML 추가
2. `cacheElements()`에 캐시 라인 추가
3. `bindEvents()`에 이벤트 리스너 추가
4. 클래스에 핸들러 메서드 추가
5. 상태 변경 후 `this.render()` 호출하여 뷰 업데이트

**스타일인 경우**:
1. `css/styles.css`에 추가 (HTML에 인라인으로 하지 않기)
2. 레이아웃/색상용 Tailwind, 애니메이션/복잡한 스타일용 CSS 사용
3. 필요하면 다크 모드 변형 추가

### 예시: "카테고리" 필드 추가하기

**단계 1: 데이터 모델 업데이트** (storage.js)
```javascript
addItem(title, category = 'default') {
  const newItem = {
    // ... 기존 필드
    category: category.trim()
  };
  // ...
}
```

**단계 2: UI 업데이트** (index.html)
```html
<!-- 입력 근처에 카테고리 선택자 추가 -->
<select id="categorySelect">
  <option value="default">일반</option>
  <option value="health">건강</option>
  <option value="travel">여행</option>
</select>

<!-- 항목에 카테고리 표시 추가 -->
<span class="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
  ${item.category}
</span>
```

**단계 3: 저장소 로직 추가** (storage.js)
```javascript
getItemsByCategory(category) {
  const list = this.load();
  return list.filter(item => item.category === category);
}
```

**단계 4: 앱 업데이트** (app.js)
```javascript
cacheElements() {
  // ... 기존 캐시
  this.categorySelect = document.getElementById('categorySelect');
}

handleAdd(e) {
  // ... 기존 검증
  const category = this.categorySelect.value;
  BucketStorage.addItem(title, category);
  // ...
}

// 필요하면 render()에 카테고리별 필터링 추가
```

## 디버깅 팁

- DevTools → Application 탭 → LocalStorage를 열어 원본 데이터 검사
- 브라우저 콘솔에서 `BucketStorage` 오류 로그 확인 (저장된 항목에는 try-catch 블록 있음)
- 페이지 로드 후 `app` 전역 확인: 콘솔에서 `window.app`
- 필터 로직 직접 테스트: `BucketStorage.getFilteredList('completed')` 호출

## 일반 작업

### 모든 데이터 지우기

DevTools (Application → LocalStorage)에서 LocalStorage 삭제 또는 다음을 호출하는 재설정 버튼 추가:
```javascript
localStorage.removeItem('bucketList');
location.reload();
```

### 데이터를 JSON으로 내보내기

```javascript
const data = BucketStorage.load();
console.log(JSON.stringify(data, null, 2));
// 콘솔에서 복사하여 파일로 저장
```

### UI 텍스트 수정

- 제목 및 레이블: `index.html` 편집
- 버튼 텍스트: `index.html`의 `<button>` 요소 또는 `js/app.js`의 `createBucketItemHTML()` 메서드 편집
- 자리표시자 텍스트: `index.html`의 `<input placeholder>` 속성 업데이트

### 색상 계획 변경

`index.html`의 Tailwind 클래스가 색상을 제어합니다. 예:
- `bg-blue-600` → `bg-green-600`, `bg-purple-600`
- `text-gray-800` → `text-gray-900`

HTML 또는 CSS 파일을 편집하여 전역 또는 선택적으로 바꿉니다. [Tailwind 색상 팔레트](https://tailwindcss.com/docs/customizing-colors) 참조.

## 성능 주의사항

- LocalStorage는 도메인당 약 5-10MB 제한; 이 앱은 일반적인 데이터에 1KB 미만 사용
- `render()`는 모든 변경 시 호출됨—작은 목록 (<1000개 항목)에는 문제 없음
- `cacheElements()`의 DOM 캐싱은 효율적인 이벤트 바인딩 및 업데이트 보장
- 외부 API 호출 또는 데이터베이스 없음—모든 작업은 즉시 및 동기식

## 브라우저 호환성

다음을 지원하는 모든 현대 브라우저:
- LocalStorage API
- ES6 (화살표 함수, 템플릿 리터럴)
- Fetch (사용되지 않지만 완전성을 위해 나열)
- CSS Flexbox 및 Grid (Tailwind)

Chrome, Firefox, Safari, Edge의 최신 버전에서 테스트됨.
