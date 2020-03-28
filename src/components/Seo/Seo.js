import React from "react";
import {Helmet} from "react-helmet";
 
class Application extends React.Component {
  render () {
    return (
        <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Anl-virus</title>
                <meta name="msvalidate.01" content="AE72042242E3FA7FF419652FD3C545C0" />
                <meta name="keywords" content="oms,who,coronavirus,covid-19,anal-virus,corona tracker,anal-vir"></meta>
                <meta name="description" content="tracks all the cases of coronavirus(recovered,confirmed,deaths)" />
                <link rel="canonical" href="https://anal-virus.info" />
            </Helmet>
            ...
        </div>
    );
  }
};