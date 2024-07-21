import { BrowserWindow, globalShortcut, screen } from 'electron'

type IProps = {
  win: BrowserWindow
}

const createGlobalKeyMap = ({ win }: IProps) => {
  globalShortcut.register('Alt+i', () => {
    if (win.isVisible()) {
      win.hide()
    } else {
      // 获取当前鼠标所在的显示器
      const cursorScreen = screen.getDisplayNearestPoint(
        screen.getCursorScreenPoint()
      )

      // 将窗口移动到当前屏幕的中心
      const { width, height } = cursorScreen.workAreaSize
      win.setBounds({
        x: cursorScreen.workArea.x + (width - win.getBounds().width) / 2,
        y: cursorScreen.workArea.y + (height - win.getBounds().height) / 2,
        width: win.getBounds().width,
        height: win.getBounds().height
      })

      win.show()
      win.focus()
    }
  })
}

export default createGlobalKeyMap
