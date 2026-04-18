import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'


const app = new Hono()

// トップページ
app.use('/', serveStatic({ path: './static/index.html' }))
app.use('/*', serveStatic({ root: './static/' }))

// ログインする度にアクセス、もしDBに登録がなかったらDBにユーザーを登録する
app.get('/signin', (c) => {
  return c.text('')
})

// ユーザー削除

// タスク一覧
app.get('/api/v1/tasks', (c) => {
  const userId = c.req.query('userId')
  
  // jsonでタスクのリストを返す
  return c.json({})
})

export default app