import React from "react"
import Layout from "../components/layout"

export default () => (

  <head>
  //<!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-152429901-1"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-152429901-1');
  </script>
</head>
 <Layout>
    <title>Pete Collum</title>
    

    <a href="https://www.efl.com/clubs-and-competitions/sky-bet-league-two/league-table/">English Football League 2</a>
    <p>
    Oldham Athletic Association Football Club is a professional association football club based in the town of Oldham, Greater Manchester, England. The team compete in League Two, the fourth tier of English football, and play home matches at Boundary Park.
    </p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed sollicitudin nisi, maximus porta odio. Pellentesque condimentum, sem at bibendum convallis, dui lorem mattis turpis, quis aliquam dui odio vitae diam. </p>
    
    <a href="https://www.oldhamathletic.co.uk/">
    <img
        src="https://www.oldhamathletic.co.uk/siteassets/image/201718/misc/badge.jpg/Medium"
        alt="Oldham Athletic Logo"
        href="https://www.oldhamathletic.co.uk/"
      />
      </a>
  </Layout>

)
