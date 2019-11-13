import React from "react"
import Layout from "../components/layout"

export default () => (
    <head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-152429901-1"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)};
        gtag('js', new Date());

        gtag('config', 'UA-152429901-1');
      </script>
    </head>
    <Layout>
    <title>About Latics</title>
    <h1>About Latics</h1>
    <p>Local Rivals include Bury FC, Rochdale FC, Preston FC.</p>
    
    <p>Donec sed mauris ac magna vestibulum placerat a et risus. Aliquam mollis mi nec magna egestas, in aliquam neque faucibus. Vestibulum eu velit leo. Nulla viverra ante quis ipsum feugiat accumsan. Nunc fringilla, enim at faucibus bibendum, odio nisi aliquet nisi, nec maximus lacus nisl faucibus ipsum. Vivamus eu est vulputate, gravida mauris at, consequat ligula. Duis sollicitudin elementum velit egestas egestas. In condimentum ligula dolor, at feugiat massa bibendum interdum. Aenean varius tempor purus, nec dictum sem ornare vitae. Nam sollicitudin in sapien gravida ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

    

    <p><a href="https://www.efl.com/clubs-and-competitions/sky-bet-league-two/league-table/">English Football League 2</a></p>

    <p><a href="https://www.manchestereveningnews.co.uk/all-about/oldham-athletic-fc"> Manchester Evening News</a></p>

    <p><a href="https://www.bbc.co.uk/sport/football/teams/oldham-athletic"> BBC Sport</a></p>

    <p><a href="https://www.oldham-chronicle.co.uk/news-features/157/latics"> Oldham Chronicle</a></p>
    

    </Layout> 
)