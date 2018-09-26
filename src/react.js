import Taro from '@tarojs/taro-weapp'

export default {
  showLoading (title = '读取中...') {
    return Taro.showLoading({
      title,
      mask: true
    })
  },
  hideLoading () {
    Taro.hideLoading()
  },
  showToast (config) {
    if (Object(config) !== config) {
      let title = config

      config = {
        title
      }
    }

    return Taro.showToast({
      mask: true,
      icon: 'none',
      ...config
    })
  },
  hideToast () {
    Taro.hideToast()
  },
  showModal (options) {
    return Taro.showModal(options)
  }
}
