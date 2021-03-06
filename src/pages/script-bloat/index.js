import Head from "next/head";
import React from "react";

import { PageContainer } from "~/components/PageContainer";

export default function ScriptBloat() {
  return (
    <>
      <Head>
        <script src="//cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/bluebird/3.7.2/bluebird.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/d3/6.6.0/d3.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"></script>
        <script src="//code.jquery.com/jquery-2.2.4.js"></script>
        <script src="//code.jquery.com/jquery-3.4.1.js"></script>
        <script src="//code.jquery.com/jquery-3.6.0.js"></script>
        <script src="//code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
        <script src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.js"></script>
        <script src="//cdn.datatables.net/1.10.24/js/jquery.dataTables.js"></script>
        <link
          href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"
          rel="stylesheet"
        ></link>
        <link
          href="//cdn.datatables.net/1.10.24/css/jquery.dataTables.min.css"
          rel="stylesheet"
        ></link>
      </Head>
      <PageContainer title="Problem: Script Bloat 😟">
        <p>
          This page includes way too many script tags for its own good. They're
          taking up all sorts of time downloading and running.
        </p>
        <p>
          They don't even use <code>defer</code> or <code>async</code> tags so
          the browser needs to run them before it can continue parsing the DOM!
        </p>
      </PageContainer>
    </>
  );
}
