# 성경고사 문제은행 PWA

구약 200문항 + 신약 200문항 성경 퀴즈 앱입니다.
스마트폰 홈 화면에 설치하여 앱처럼 사용할 수 있습니다.

## 파일 구성

```
index.html    ← 앱 본체 (전체 문제 포함)
manifest.json ← PWA 설정
sw.js         ← 오프라인 지원 (Service Worker)
icon-192.png  ← 앱 아이콘
icon-512.png  ← 앱 아이콘 (고해상도)
```

## GitHub Pages 배포 방법 (무료)

1. github.com 에서 계정 만들기 (이미 있으면 생략)
2. 우측 상단 + → New repository
3. Repository name: bible-quiz (또는 원하는 이름)
4. Public 선택 → Create repository
5. 이 폴더의 파일 5개를 모두 업로드 (Add file → Upload files)
6. Settings → Pages → Source: Deploy from a branch → Branch: main → Save
7. 잠시 후 https://[사용자명].github.io/bible-quiz 접속 가능

## 안드로이드 설치 방법

1. 크롬으로 위 URL 접속
2. 주소창 옆 설치 아이콘 또는 메뉴 → "홈 화면에 추가"
3. 설치 완료 — 앱 아이콘으로 실행 가능

## 오프라인 지원

최초 1회 접속 후에는 인터넷 없이도 작동합니다.
