// pages/search/search.js
Page({
  data: {
    // 模糊查询时长
    timer: 0,
    // 点击结果项之后替换到文本框的值
    inputValue: '',
    // 是否隐藏模糊查询的面板
    hideScroll: true,
    // 历史查询记录
    historySearch: wx.getStorageSync('historySearch') || [],
    // 模糊查询结果
    searchTip: []
  },

  // onConfirm(e) {
  //   const keyword = e.detail.value

  //   console.log('keyword:', keyword)
  //   if (keyword) {
  //     this.addHistorySearch(keyword)
  //     this.searchByKeyWord(keyword)
  //     this.setData({
  //       keyword: keyword
  //     })
  //   }
  // },
  getInf(str, key) {
    return str
      .replace(new RegExp(`${key}`, 'g'), `%%${key}%%`)
      .split('%%')
      .filter(item => {
        if (item) {
          return true
        }
        return false
      })
  },

  onInput(e) {
    const inputValue = e.detail.value

    clearTimeout(this.data.timer)
    let timer = setTimeout(() => {
      if (inputValue) {
        // 如果输入的关键字不为空，则发起请求获取联想值
        const tips = [
          { tip: '城市', content: '北京' },
          { tip: '大学', content: '北京大学' },
          { tip: '专业', content: '北京测绘工程' }
        ]

        const newTips = tips.map(item => {
          const { tip, content } = item

          const newContent = this.getInf(content, inputValue)

          return { tip, content: newContent }
        })

        console.log('newTips:', newTips)

        this.setData({
          inputValue: inputValue,
          searchTip: newTips,
          hideScroll: false
        })
        return
      }
      // 如果为空，则收起
      this.setData({
        searchTip: [],
        hideScroll: true,
        inputValue: ''
      })
    }, 600)

    this.data.timer = timer
  },
  itemtap(e) {
    const { info } = e.currentTarget.dataset

    this.setData({
      // 将点击选择的值展示在input框中
      inputValue: info.content.join(''),
      // 当用户选择某个联想词，隐藏下拉列表
      hideScroll: true
    })
    this.addHistorySearch(info)
    // 发起请求，获取查询结果
    this.searchByKeyWord(info)
  },
  searchByKeyWord(info) {
    // 发起请求，获取面板数据
  },
  addHistorySearch(value) {
    const historySearch = wx.getStorageSync('historySearch') || []
    // 是否有重复的历史记录

    let has = false

    for (let history of historySearch) {
      const { content } = history

      if (value.content === content) {
        has = true
        break
      }
    }

    if (has) {
      return
    }

    const len = historySearch.length

    if (len >= 8) {
      historySearch.pop()
    }

    historySearch.unshift(value)
    wx.setStorage({
      key: 'historySearch',
      data: historySearch,
      success: () => {
        this.setData({ historySearch: historySearch })
      }
    })
  }
})
