// 설치 조건 충족용 최소 서비스워커 (캐시 없음: 항상 최신 데이터를 네트워크에서 받음)
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
