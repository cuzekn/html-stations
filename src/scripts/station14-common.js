async function main() {
    const results = await getData(); //testのデータが入ってる
    const elem = document.getElementById("result"); //id:resultを取得してelemに代入
    results.forEach(result => {
        let li = document.createElement('li'); //liを作成
        let text = document.createTextNode(result.full_name); //liの中にresult.full_nameを挿入
        li.appendChild(text); //liの中にresulet.full_nameを追加
        elem.appendChild(li); //ulの中にliを増やす
    })
}

main()
