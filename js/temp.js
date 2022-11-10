   // var , let ,conset
      //常數宣告
      const PI = 3.1415926;
      let radius = 10;

      let area = radius ** 2 * PI;
      document.write("<h2 style='color:red'>面積為:" + area + "</h2>");
      console.log(radius, typeof radius);
      alert("面積為:" + area);
      let x = Number(prompt("請輸入第一個數字:"));
      let y = Number(prompt("請輸入第二個數字:"));
      //字串樣板
      document.write(`<h3>${x}+${y}=${x + y}</h3>`);

      //字串
      let email = "123bert@gmail.com";
      console.log(email, typeof email);
      console.log(email.length);
      console.log(email[0]);
      console.log(email.indexOf("e"));
      console.log(email.substring(0, 5));
      console.log(email.substring(0, 3) === 123);

      //javascrip的迴圈
      let i = 0;
      for (; i < email.length; ) {
        console.log(i, email[i++]);
      }

      //ASCII

      console.log("A" > "a");

      z = 10;

      console.log(typeof !z);

      //亂數
      console.log(Math, PI);

      //取出0~100亂數值
      x = Math.random();
      console.log(x);
      console.log(x * 10);
      console.log(Math.floor(x * 10));

      //1-10之間
      for (let i = 0; i < 10; i++) {
        console.log(Math.floor(Math.random() * 10) + 1);
      }

      //0-10之間亂數
      let start = 0;
      let end = 100;

      /*
        console.log(Math.floor(Math.random()*(end-start+1)+start);
        */

      let count = 0;
      while (true) {
        let x = Math.floor(Math.random() * (end - start + 1)) + start;
        console.log(x);
        if (x == 100) {
          break;
        }
        count++;
      }
      console.log(`次數:${count}`);