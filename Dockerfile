# node 버전 선택
FROM node:14-slim

# 도커 컨테이너 내부의 작업 디렉토리 결정
WORKDIR /usr/src/app

# 외부 패키지 설치를 위해 package.json과 yarn.lock 파일 복사
COPY package.json .
COPY yarn.lock .

# 패키지 설치
RUN yarn

# 나머지 모두 복사
COPY . .

# 도커 컨테이너에 접근할 수 있게 포트 열어주기
EXPOSE 3000

# 앱 실행시키기
CMD [ "yarn", "dev" ]