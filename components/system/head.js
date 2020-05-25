import { Head } from "next/document";

const customHead = () => (
   <>
     <meta charSet="utf-8" />
     <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
     <title>🏔 Bart rocks</title>
     <meta name="apple-mobile-web-app-title" content="bart.rocks" />
     <meta
       name="description"
       content="bart.rocks => the online front of Bart Nowak"
     />
     <meta
       name="keywords"
       content="web, applications, engineering, front-end, react, vue, devops, cloudops, architecture, microservices, bart, nowak"
     />
     <meta name="author" content="Bart Nowak" />
     <meta
       name="viewport"
       content="width=device-width,height=device-height,initial-scale=1.0"
     />
     <meta httpEquiv="cleartype" content="on" />
   </>
 )

export default customHead;
