// Import React
import React from "react";

// Import Spectacle Core tags
import {
    Appear, BlockQuote, Cite, CodePane, Code, ComponentPlayground, Deck, Fill,
    Heading, Image, Layout, Link, ListItem, List, Markdown, MarkdownSlides, Quote, Slide,
    TableBody, TableHeader, TableHeaderItem, TableItem, TableRow, Table, Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const theme = createTheme({
    primary: "#ECF0F1",
    secondary: "#2C3E50",
    tertiary: "#2980B9",
    quartenary: "#3498DB",
    pentenary: "#E74C3C"
}, {
    primary: "sans-serif"
});

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck transition={["zoom", "slide"]} theme={theme} transitionDuration={1000}>
                <Slide transition={["zoom"]}>
                    <Heading size={1} full caps lineHeight={1} textColor="secondary">
                        Moving forward to HTTPS
                    </Heading>
                    <Appear>
                        <Text size={1} fit caps textColor="tertiary">
                            Yet another guide to Let's Encrypt...
                        </Text>
                    </Appear>
                    <Appear>
                        <Text size={1} fit textColor="quartenary">
                            ... which is especially useful nowadays
                        </Text>
                    </Appear>
                </Slide>
                <Slide transition={["spin", "slide"]} bgColor="secondary">
                    <Heading size={1} fit caps lineHeight={1} textColor="primary">
                        Password and CC fields are not secure on HTTP anymore
                    </Heading>
                    <Appear><Image src={require("../assets/http-not-secure-jan.png")}/></Appear>
                    <Appear>
                        <Text>
                            <Link textColor="quartenary"
                                  href="https://security.googleblog.com/2016/09/moving-towards-more-secure-web.html">
                                Read "Moving towards a more secure web" on Google Security Blog</Link>
                        </Text>
                    </Appear>
                </Slide>
                <Slide transition={["spin", "slide"]} bgColor="secondary">
                    <Heading size={1} fit caps lineHeight={1} textColor="primary">
                        Soon all text fields will not be secure on HTTP
                    </Heading>
                    <Appear><Image src={require("../assets/http-not-secure-oct.png")}/></Appear>
                    <Appear>
                        <Text>
                            <Link textColor="quartenary"
                                  href="https://security.googleblog.com/2017/04/next-steps-toward-more-connection.html">
                                Read "Next Steps Toward More Connection Security" on Google Security Blog
                            </Link>
                        </Text>
                    </Appear>
                </Slide>
                <Slide transition={["spin", "slide"]} bgColor="secondary">
                    <Heading size={1} fit caps lineHeight={1} textColor="primary">
                        Devs will also see a console warning
                    </Heading>
                    <Appear><Image src={require("../assets/not-secure-warning.png")}/></Appear>
                    <Appear>
                        <Link textColor="quartenary"
                              href="chrome://flags/#mark-non-secure-as">chrome://flags/#mark-non-secure-as</Link>
                    </Appear>
                    <Appear>
                        <Text>
                            <Link textColor="quartenary"
                                  href="https://developers.google.com/web/updates/2016/10/avoid-not-secure-warn">
                                Read "Avoiding the Not Secure Warning in Chrome" on Google Developers Updates
                            </Link>
                        </Text>
                    </Appear>
                </Slide>
                <Slide transition={["spin", "slide"]} bgColor="secondary">
                    <Heading size={1} fit caps lineHeight={1} textColor="primary">
                        ... and eventually HTTP becomes not secure in general
                    </Heading>
                    <Appear><Image src={require("../assets/http-not-secure-always.png")}/></Appear>
                    <Appear><Text textColor="primary">
                        We need to switch to HTTPS NOW!
                    </Text></Appear>
                </Slide>
                <Slide transition={["zoom", "spin"]} bgColor="primary">
                    <Heading size={1} fit caps lineHeight={1} textColor="secondary">Let's Encrypt to rescue!</Heading>
                </Slide>
                <Slide transition={["spin", "slide"]} bgColor="secondary">
                    <Heading size={1} fit caps lineHeight={1} textColor="primary">Installation</Heading>
                    <Text>
                        <Link textColor="quartenary" href="https://letsencrypt.org/docs/client-options/">ACME clients</Link>
                        &rarr;
                        <Link textColor="quartenary" href="https://certbot.eff.org/">Certbot</Link>
                    </Text>
                    <Text>
                        Certbot can be installed from official repositories or backports
                    </Text>
                </Slide>
                <Slide transition={["spin", "slide"]} bgColor="secondary">
                    <Heading size={1} fit caps lineHeight={1} textColor="tertiary">Certbot configuration</Heading>
                    <CodePane source={require("raw-loader!../assets/certbot.example")} margin="20px auto" />
                    <Appear><Text>Find your certificate at <Link textColor="quartenary" href="http://crt.sh/">crt.sh</Link></Text></Appear>
                    <List textColor="primary">
                        <Appear><ListItem>There is <Link textColor="quartenary" href="https://letsencrypt.org/docs/rate-limits/">rate-limiting</Link></ListItem></Appear>
                        <Appear><ListItem>All configs are in /etc/letsencrypt</ListItem></Appear>
                        <Appear><ListItem>.well-know directory is used to validate domain</ListItem></Appear>
                    </List>
                </Slide>
                <Slide transition={["spin", "slide"]} bgColor="secondary">
                    <Heading size={1} fit caps lineHeight={1} textColor="tertiary">Certificates renewal</Heading>
                    <CodePane source={require("raw-loader!../assets/crontab.example")} margin="20px auto" />
                </Slide>
                <Slide transition={["spin", "slide"]} bgColor="secondary">
                    <Heading size={1} fit caps lineHeight={1} textColor="tertiary">Nginx configuration</Heading>
                    <CodePane source={require("raw-loader!../assets/nginx.example")} margin="20px auto" />
                    <Appear><Text>Test HTTPS with <Link textColor="quartenary" href="https://www.ssllabs.com/ssltest/">SSL Labs</Link></Text></Appear>
                </Slide>
                <Slide transition={["spin", "slide"]} bgColor="secondary">
                    <Heading size={1} fit caps lineHeight={1} textColor="tertiary">HTTP to HTTPS checklist</Heading>
                    <List textColor="primary">
                        <Appear><ListItem>Hardcoded http links</ListItem></Appear>
                        <Appear><ListItem>External http content (images, iframes, etc)</ListItem></Appear>
                        <Appear><ListItem>Analytics</ListItem></Appear>
                        <Appear><ListItem>Webmaster tools</ListItem></Appear>
                        <Appear><ListItem>External comments (like disqus)</ListItem></Appear>
                        <Appear><ListItem>Social networks integration (widgets, share buttons, meta tags)</ListItem></Appear>
                        <Appear><ListItem>Error tracking services</ListItem></Appear>
                        <Appear><ListItem>External links to our site (from emails, ads, other sites, etc)</ListItem></Appear>
                        <Appear><ListItem>Other third-party services in use</ListItem></Appear>
                    </List>
                </Slide>

                <Slide transition={["spin", "slide"]} bgColor="secondary">
                    <Heading size={1} fit caps lineHeight={1} textColor="tertiary">SSL / TLS / SNI</Heading>
                    <List textColor="primary">
                        <Appear><ListItem>SSL is a predecessor of TLS</ListItem></Appear>
                        <Appear><ListItem>HTTPS does not reveal domain name or query params or headers</ListItem></Appear>
                        <Appear><ListItem>
                            SNI (Server Name Indication)
                            allows the client to tell it's hostname to server before TLS handshaking
                            and makes multiple certificates on the same IP and port possible
                        </ListItem></Appear>
                    </List>
                </Slide>

                <Slide transition={["spin", "slide"]} bgColor="secondary">
                    <Heading size={1} fit caps lineHeight={1} textColor="tertiary">HSTS</Heading>
                    <List textColor="primary">
                        <Appear><ListItem>Strict-Transport-Security: max-age=31536000; includeSubDomains; preload</ListItem></Appear>
                        <Appear><ListItem>307 redirect</ListItem></Appear>
                        <Appear><ListItem>Preloaded HSTS <Link textColor="quartenary" href="https://www.chromium.org/hsts">https://www.chromium.org/hsts</Link></ListItem></Appear>
                        <Appear><ListItem><Link textColor="quartenary" href="chrome://net-internals/#hsts">chrome://net-internals/#hsts</Link></ListItem></Appear>
                    </List>
                </Slide>
                <Slide transition={["spin", "slide"]} bgColor="secondary">
                    <Heading size={1} fit caps lineHeight={1} textColor="tertiary">HTTP/2</Heading>
                    <List textColor="primary">
                        <Appear><ListItem>TLS is a requirement for HTTP/2</ListItem></Appear>
                        <Appear><ListItem>Check HTTP/2 support at <Link textColor="quartenary" href="https://tools.keycdn.com/http2-test">https://tools.keycdn.com/http2-test</Link></ListItem></Appear>
                        <Appear><ListItem>NPN (Next Protocol Negotiation) vs ALPN (Application Layer Protocol Negotiation)</ListItem></Appear>
                    </List>
                </Slide>
            </Deck>
        );
    }
}