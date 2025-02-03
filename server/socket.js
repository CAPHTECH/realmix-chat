import express from "express"
import { createServer } from "http"
import { Server } from "socket.io"

const app = express()
const server = createServer(app)
const io = new Server(server, {
  cors: {
    origin: "*", // 必要に応じてCORS設定を調整
    methods: ["GET", "POST"]
  }
})

io.on("connection", (socket) => {
  console.log("ユーザー接続:", socket.id)

  socket.on("chat message", (msg) => {
    console.log(`メッセージ受信 (${socket.id}): ${msg}`)
    io.emit("chat message", msg)
  })

  socket.on("disconnect", () => {
    console.log("ユーザー切断:", socket.id)
  })
})

const PORT = process.env.PORT || 4000
server.listen(PORT, () => {
  console.log(`Socket.IO サーバー起動: ポート ${PORT}`)
}) 
