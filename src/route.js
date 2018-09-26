import Taro from '@tarojs/taro'

export function append (url, params) {
  Object.keys(params).forEach((key, index) => {
    const type = index === 0 ? '?' : '&'

    url = `${url}${type}${key}=${params[key]}`
  })

  return url
}

export default {
  redirect (url, params = {}) {
    Taro.redirectTo({
      url: append(url, params)
    })
  },
  to (url, params = {}) {
    Taro.navigateTo({
      url: append(url, params)
    })
  },
  switch (url) {
    Taro.switchTab({
      url
    })
  },
  back () {
    Taro.navigateBack()
  },
  reLaunch (url) {
    Taro.reLaunch({
      url
    })
  }
}
