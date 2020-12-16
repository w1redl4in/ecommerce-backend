const aprovedEmail = (who: string): string => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap"
      rel="stylesheet"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hub Bank</title>

    <style type="text/css">
      body {
        padding: 0;
        -webkit-font-smoothing: antialiased;
        font-family: "Open Sans", sans-serif;
      }
      table {
        border-spacing: 0;
        margin-top: 20px;
      }
      td {
        padding: 0;
      }
      img {
        border: 0;
      }
      p {
        font-size: 14px;
        color: #505050;
        font-weight: normal;
        font-style: normal;
      }
      pre {
        font-family: "Open Sans", sans-serif !important;
        font-size: 13px;
        color: #505050;
        font-weight: 500;
        opacity: 0.5;
      }
      span {
        color: #505050;
      }
      .wrapper {
        width: 70%;
        margin: 0 auto;
        table-layout: fixed;
        background-color: #f2f2f2;
        padding-top: 1px;
        height: 115em;
      }
      .webkit {
        max-width: 93%;
        height: 60%;
        background: white;
      }
    @media only screen and (max-width: 600px) {
      .wrapper {
        min-width: 100% !important;
        height: 85em !important;
      }
      svg {
        text-align: center !important;
      }
      .webkit {
        min-width: 100% !important;
        height: 50em !important;
        background: white;
    }
    .hide {
      display: none;
    }
    }
    </style>
  </head>
  <body>
    <center class="wrapper">
      <div class="webkit">
        <table>
          <tr>
            <td>
              <table>
                <tr>
                  <td align="center">
                    <table>
                      <tr>
                        <td align="center">
                          <img
                           src="https://cdn.valepresente.com.br/image/4b1ea45f19e74080b54879bb909c9a32/Header_Aproved.png"
                           alt=""
                           class="hide-imgs"
                          />
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td align="center">
              <table>
                <tr>
                  <td align="center">
                    <p style="font-weight: 600; font-size: 18px; color: #2C4A9A;">
                      Olá, ${who}
                    </p>
                  </td>
                </tr>
              </table>

              <p style="font-weight: normal;">
                Sua conta foi aprovada e agora poderá aproveitar todos os benefícios da <br/> Hub Bank feitos para você.
              </p>
              <table>
              <tr>
                  <td align="center">
                    <img src="https://cdn.valepresente.com.br/image/7a665ad6bb5146b5b80e78573ea513f4/Transferir.png" alt="" srcset="">
                    <br>
                    <p style="font-size: 14px; opacity: 0.5;">
                        Transferências<br />
                        bancárias
                    </p>
                  </td>
                  <td>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                  </td>
                  <td align="center">
                    <img src="https://cdn.valepresente.com.br/image/edc28563f9c34c0ab6d4fe306512d61a/Recarregar.png" alt="" srcset="">
                    <br>
                    <p style="font-size: 14px; opacity: 0.5;">
                        Recarga<br />
                        de celular

                    </p>
                  </td>
                </tr>
                <tr>
                    <td align="center">
                        <img src="https://cdn.valepresente.com.br/image/384e1bb4d9fb4ba9bab9a4dd7e94bf2e/Sacar.png" alt="" srcset="">
                        <br>
                        <p style="font-size: 14px; opacity: 0.5;">
                            Saque em Caixas<br />
                            24h e Loterias
                        </p>
                    </td>
                    <td>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                  </td>
                    <td align="center">
                        <img src="https://cdn.valepresente.com.br/image/f6f1ad390bfd4a46a8dfcf25a1c493af/Pagar.png" alt="" srcset="">
                        <br>
                        <p style="font-size: 14px; opacity: 0.5;">
                            Pagamentos<br />
                            de Contas
                        </p>
                    </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
              <td align="center">
                  <table>
                      <tr>
                          <td align="center">
                              <p>E demais serviços personalizados para você 😌</p>
                          </td>
                      </tr>
                      <tr>
                          <td align="center">
                              <p>Acesse o aplicativo para conhecer essa experiência e utilizar<br />sua conta agora mesmo.</p>
                          </td>
                      </tr>
                  </table>
              </td>
          </tr>
          <tr>
            <td align="center">
              <table>
                <tr>
                  <td align="center">
                    <table>
                      <tr>
                        <td align="center">
                          <div style="height: 2px;width: 68px;background-color: #c4c4c4;border-radius: 5px;"></div>
                        </td>
                      </tr>
                    </table>
                    <table>
                      <tr>
                        <td>
                          <table>
                            <tr>
                              <td align="center">
                                <span>
                                  Obrigado,<br />
                                </span>
                                <span style="color: #2C4A9A;font-weight: 600;"
                                  >Hub Bank</span
                                >
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
      <table>
        <tr align="center">
          <td>
            <table>
              <tr>
                <td align="center">
                  <img src="https://cdn.valepresente.com.br/image/fd163ded0e3146dd8f3592a7b2792cc8/HubBankFooter.png" alt="" />
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr align="center">
          <td>
            <table>
              <tr>
                <td align="center">
                  <span>Quer falar com a gente?</span><br />
             <span style="text-decoration: underline; color: #2C4A9A;"
              >contaaqui@hubfintech.com.br</span
            >
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td align="center">
            <table>
              <tr>
                <td align="center">
                  <span
                    style="
                      color: #505050;
                      letter-spacing: 0.02em;
                      font-weight: 600;
                      font-style: normal;
                      text-transform: uppercase;
                    "
                    >CENTRAL DE ATENDIMENTO</span
                  >
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      <table>
        <tr>
          <td align="center">
            <span>São Paulo e regiões metropolitanas</span> <br />
            <span style="font-weight: 600;">(11) 2050-3887</span>
          </td>
          <td>
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
          </td>
          <td align="center">
            <span>Whatsapp</span> <br />
            <span style="font-weight: 600;">11 2050-3865</span>
          </td>
        </tr>
      </table>
      <table>
        <tr>
          <td align="center">
            <span>Demais regiões (ligações não permitidas de celulares)</span>
            <br />
            <span style="font-weight: 600;">0800 880 8888</span>
          </td>
        </tr>
      </table>
      <table>
        <tr>
          <td>
            <table>
              <tr>
                <td align="center">
                  <span style="font-weight: 600;">Ouvidoria</span><br />
                  <span>0800 942 6167</span>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      <table>
        <tr>
          <td align="center">
            <a
                href="https://www.instagram.com/hubnoinsta/"
                target="_blank"
                style="text-decoration: none;"
              >
                <img
                  src="https://cdn.valepresente.com.br/image/19826146a40a4652a30adf94db0b63a1/Twitter.png"
                  alt=""
                  width="25px"
                />
            <td align="center">
              &nbsp;
              &nbsp;
              &nbsp;
            </td>
            <td align="center">
              <a
                href="https://www.facebook.com/hub.fintech/"
                target="_blank"
                style="text-decoration: none;"
              >
                <img
                  src="https://cdn.valepresente.com.br/image/195587e726904942b873550068172e67/Facebook.png"
                  alt=""
                  width="25px"
                />
            </td>
            <td align="center">
              &nbsp;
              &nbsp;
              &nbsp;
            </td>
            <td align="center">
              <a
                href="https://www.linkedin.com/company/hubfintech/"
                target="_blank"
                style="text-decoration: none;"
              >
                <img
                  src="https://cdn.valepresente.com.br/image/5d252693ba4e4cb696384a798c51399e/LinkedIn.png"
                  alt=""
                  width="25px"
                />
            </td>
          </td>
        </tr>
      </table>
    </center>
  </body>
</html>
`;

export default aprovedEmail;
