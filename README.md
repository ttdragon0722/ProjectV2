### TODO
- **公告**
  - [x] 公告動畫特效 滑入

- **首頁**
  - [x] dropdown 背景黑底白字
  - [x] dropdown padding 調高

- **Header Bar**
  - [x] Function bar information 改成圖示
    - 回首頁  聯絡我們 購物清單  結帳  語系
  - [x] 語系選擇 簡繁轉換
  - [x] 選擇語言的介面圖示砍掉
- **Body**
  - [x] body的元件 邊界修齊
- **Map**
  - [x] map 邊界修飾
- **Footer**
  - [x] Link icon 增可以塞到13個    
  - [x] Footer改成三排    
  - [x] Footer 改1比3 ( 1: logo + fb  3:fast link)    
  - [x] Footer往上的箭頭
  
- **Product**
  - [x] Product 篩選介面往左移 當成標題 +一個地方可以加英文
  - [ ? ] Product 篩選內距加大  延伸成一大條 顏色很淺的灰
  - [ ? ] Product 的換頁按鈕的 距離加大 字變小


- **Fixed icon**
  - [x] 購物車icon 外面加一個數量的圖示
  - [x] 搜尋按鈕
  - [x] 綁定fixed
  - [x] 回到最上層

- **Service**
  - [x] Service 圖片比例固定 (1：1)
  - [x] 間距調小
  - [x] 圖片改成圓形

- **Mobile**
  - [x] Mobile menu link padding 加大
  - [x] Function bar+搜尋  logo移中間
  - [x] 間距貼齊
  - [x] 手機板圓弧刪除
  - [?] search model


##**PC Menu Sample**
###### no dropdown
``` html
<div class="main_wrap">
    <a href=""><div class="main_wrap_btn">首頁</div></a>
</div>
```

###### with dropdown
``` html
<div class="main_wrap">
    <div class="main_wrap_btn">居家/生活<i class="fa-solid fa-caret-down"></i></div>
    <div class="wrap_dropdown">
        <a href="#"><div>Link 1</div></a>
        <a href="#"><div>Link 2</div></a>
        <a href="#"><div>Link 3</div></a>
    </div>
</div>
```



##**Mobile Menu Sample**
###### no dropdown
``` html
<div class="mobile_menu_item">
    <a class="mobile_menu_link" href="">
        <div>title</div>
    </a>
</div>
```
###### with dropdown
``` html
<div class="mobile_menu_item">
    <div class="mobile_dropdown">居家/生活<i class="fa-solid fa-chevron-down"></i></div>
    <div class="mobile_dropdown_items">
        <a href="">
            <div class="mobile_menu_item">link</div>
        </a>
        <a href="">
            <div class="mobile_menu_item">link</div>
        </a>
        <a href="">
            <div class="mobile_menu_item">link</div>
        </a>
        <a href="">
            <div class="mobile_menu_item">link</div>
        </a>
    </div>
</div>
```

##**Link Json Sample**
##### json
``` json
{
    "title":"",
    "link":"",
    "dropdown":[
        {
            "title":"link1",
            "link":""
        },
        {
            "title":"link2",
            "link":""
        },
        {
            "title":"link3",
            "link":""
        }
    ]
}
```

##**Product sample**
##### json
###### on sale
``` json
{
    "name":"A Product",
    "subtitle":"this is a product.",
    "imgPath":"",
    "link":"",
    "onSale":true,
    "price":1000,
    "OnSalePrice":9487
}
```
###### not on sale
``` json
{
    "name":"A Product",
    "subtitle":"this is a product.",
    "imgPath":"",
    "link":"",
    "onSale":false,
    "price":1000,
}
```

## **Fast Link**
``` json
{
    "title":"",
    "link":""
}
```