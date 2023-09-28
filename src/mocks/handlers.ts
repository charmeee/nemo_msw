import { rest } from 'msw';

const todos = ['먹기', '자기', '놀기'];
// req: 매칭되는 요청에 대한 정보
// res: 모의 응답을 만들 수 있는 유틸리티
// ctx: 모의 응답의 HTTP 상태 코드, 헤더, 바디 등을 만들 수 있는 함수들
export const handlers = [
    rest.get('/todos', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(todos));
    }),
];
