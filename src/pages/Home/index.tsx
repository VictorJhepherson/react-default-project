import React, { useState } from "react";
import { toast } from "react-toastify";
import { Container } from "./styled";
import theme from "../../styles/theme";

import { SearchBar, Toggle, Text, Button, Input, Image, Card, List, Header } from "../../components";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [toggleOn, setToggleOn] = useState(true);
  const [inputValue, setInputValue] = useState("");

  const handleAlert = () => {
    toast('Uma alerta pra você!', {
      toastId: `ID-info-light`,
      type: 'error',
      position: 'top-right',
      autoClose: 5000,
      theme: 'dark',
    })
  }

  return (
    <Container data-testid="home-screen">
      <Header
        name={`header-home`}
        attributes={{
          logoPath: 'assets/img/logo.svg',
        }}
      />

      <Text
        name={"title-home"}
        attributes={{
          text: "React Default Project",
          styleProps: {
            textComponent: {
              fontFamily: theme.font.fontFamily,
              fontSize: theme.font.size.xxlarge,
              fontWeight: theme.font.bold,
              color: theme.colors.black,
            }
          }
        }}
      />
      <SearchBar
        name={"search-bar"}
        attributes={{
          searchValue: searchValue,
          setSearchValue: setSearchValue,
        }}
      />

      <Toggle
        name={"toggle"}
        attributes={{
          toggleOn: toggleOn,
          setToggleOn: setToggleOn,
        }}
      />

      <Button
        name={`button-home`}
        attributes={{
          text: 'Enviar',
          onClick: handleAlert,
          styleProps: {
            type: 'normal',
            buttonComponent: {
              marginTop: '20px',
            }
          }
        }}
      />

      <Input
        name={`input-home`}
        attributes={{
          setInputValue: setInputValue,
          value: inputValue,
          placeholder: "Digite seu nome...",
          required: true,
          label: "Nome:",
          styleProps: {
            labelComponent: {
              alignItems: 'flex-start',
              width: '45%',
            },
            inputArea: {},
            inputComponent: {},
          }
        }}
      />

      <List
        name={`list-home`}
        attributes={{}}
      >
        <>
          {Array.from({ length: 8 }, (index: number) => {
            return (
              <Card
                key={index}
                name={`card-home`}
                attributes={{
                  styleProps: {
                    hasHover: true,
                    cardComponent: {},
                    imageCard: {},
                  }
                }}
              >
                <>
                  <Image
                    name={`image-card`}
                    attributes={{
                      src: 'assets/img/logo.svg',
                      styleProps: {
                        hasHover: false,
                        imageComponent: {}
                      }
                    }}
                  />

                  <Text
                    name={"text-card"}
                    attributes={{
                      text: "React Default Project",
                      styleProps: {
                        textComponent: {
                          fontFamily: theme.font.fontFamily,
                          fontSize: theme.font.size.small,
                          fontWeight: theme.font.bold,
                          color: theme.colors.black,
                        }
                      }
                    }}
                  />
                </>
              </Card>
            )
          })}
        </>
      </List>

      <Card
        name={`card-home`}
        attributes={{
          styleProps: {
            hasHover: true,
            cardComponent: {
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              width: '60%',
              marginBottom: '30px',
            },
            imageCard: {
              width: '40%',
              height: '100%',
              borderTopRightRadius: '0',
              borderBottomLeftRadius: '20px'
            },
          }
        }}
      >
        <>
          <Image
            name={`image-card`}
            attributes={{
              src: 'assets/img/logo.svg',
              styleProps: {
                hasHover: false,
                imageComponent: {}
              }
            }}
          />

          <Text
            name={"text-card"}
            attributes={{
              text: "React Default Project",
              styleProps: {
                textComponent: {
                  fontFamily: theme.font.fontFamily,
                  fontSize: theme.font.size.small,
                  fontWeight: theme.font.bold,
                  color: theme.colors.black,
                  margin: '30px'
                }
              }
            }}
          />
        </>
      </Card>
    </Container>
  );
}
