// /plugins/logger.ts
export class Utils {
  getCurationUrl(item: any): string {
    let url = ''
    if (item.curation) {
      url =
        'http://codh.rois.ac.jp/software/iiif-curation-viewer/demo/?curation=' +
        item.curation +
        '&pos=' +
        item.pos +
        '&mode=annotation'
    } else {
      url =
        'http://codh.rois.ac.jp/software/iiif-curation-viewer/demo/?manifest=' +
        item.manifest +
        '&canvas=' +
        item.canvas
    }
    return url
  }

  getIframeUrl(item: any, baseUrl: string) {
    let url = ''
    if (item.manifest) {
      /*
      url =
        baseUrl +
        '/curation/?manifest=' +
        item.manifest +
        '&canvas=' +
        encodeURIComponent(item.canvas)
        */
      url =
        baseUrl +
        '/mirador/?manifest=' +
        item.manifest +
        '&canvas=' +
        item.canvas +
        '&bottomPanel=false'
    } else {
      url =
        baseUrl + '/curation/?curation=' + item.curation + '&pos=' + item.pos
    }
    return url
  }

  labelConverter(value: string) {
    const map: any = {
      NDL02: '伝嵯峨本（国会図書館所蔵）',
      NDL03: '近世前期写本（国会図書館所蔵）',
      NDL04: '元和9年古活字版（国会図書館所蔵）',
      京大本01: '平松家本（京都大学所蔵）',
      京大本02: '中院文庫本（京都大学所蔵）',
      東大本: '東京大学本（東京大学総合図書館所蔵）',
      '湖月抄（国文研所蔵）': '『湖月抄』鵜飼文庫（国文研所蔵）',
      校異源氏物語: '校異源氏物語',
    }
    return map[value]
  }

  levenshteinDistance(str1: string, str2: string) {
    let r
    let c
    let cost
    const d = []

    for (r = 0; r <= str1.length; r++) {
      d[r] = [r]
    }
    for (c = 0; c <= str2.length; c++) {
      d[0][c] = c
    }
    for (r = 1; r <= str1.length; r++) {
      for (c = 1; c <= str2.length; c++) {
        // cost = str1[r-1] == str2[c-1] ? 0: 1;
        cost = str1.charCodeAt(r - 1) === str2.charCodeAt(c - 1) ? 0 : 1
        d[r][c] = Math.min(
          d[r - 1][c] + 1,
          d[r][c - 1] + 1,
          d[r - 1][c - 1] + cost
        )
      }
    }
    return d[str1.length][str2.length] / Math.max(str1.length, str2.length)
  }
}

export default (_: any, inject: any) => {
  inject('utils', new Utils())
}
