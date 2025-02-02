"""Welcome to Reflex! This file outlines the steps to create a basic app."""

import reflex as rx

from rxconfig import config


class State(rx.State):
    """The app state."""

    ...


def index() -> rx.Component:
    # Welcome Page (Index)
    return rx.container(
        #rx.color_mode.button(position="top-right"),
        rx.desktop_only(
            rx.vstack(
            rx.hstack(
                rx.link(
                    rx.icon_button(
                        "mail-plus", variant="ghost", size="2", is_rounded=True, color_scheme="teal"
                    ),
                    href="mailto:martindanielmolina@gmail.com",
                    is_external=True,
                ),
                rx.link(
                    rx.icon_button(
                        "github", variant="ghost", size="2", is_rounded=True, color_scheme="teal"
                    ),
                    href="https://github.com/MartinMolinaDev",
                    is_external=True,
                ),
                rx.color_mode.button(size="2"),
                spacing="4",
                justify="end",
                width="100%",
                align="center",
                padding_right="16px",

            ),
            rx.heading("Martín Molina", size="9"),
            rx.hstack(
                rx.heading(" Tester", size="8"),
                rx.heading("{ QA }", size="8", color_scheme="teal"),
                rx.heading(" Manual & Automation", size="8"),

            ),
            rx.code("< ABAUT ME />", color_scheme="teal", margin_top="16px"),
            rx.divider(),
            rx.text(
                "Committed to learning and growing in the field of manual and automated testing. Ability to work collaboratively and quickly assimilate new concepts. Passionate about contributing to the team's success and achieving exceptional quality standards.",
                style={"text-indent": "20px"},
            ),
            rx.flex(
                rx.link(
                    rx.button(rx.icon("arrow-down-to-line", size=20), "Download CV", variant="outline"),
                    on_click=rx.download(url="/Martin_Molina_CV.pdf", filename="Martin_Molina_CV.pdf"),
                    is_external=True, color_scheme="teal"
                ),
                justify="center", width="100%"
            ),
            rx.code("< SKILS />", color_scheme="teal", margin_top="16px"),
            rx.divider(),
            rx.flex(
                rx.badge("Python", color_scheme="gray", size="3", align="center", variant="solid", high_contrast=True),
                rx.badge("Playwright", color_scheme="gray", size="3", align="center", variant="solid", high_contrast=True),
                rx.badge("Selenium", color_scheme="gray", size="3", align="center", variant="solid", high_contrast=True),
                rx.badge("SQL", color_scheme="gray", size="3", align="center", variant="solid", high_contrast=True),
                rx.badge("POSTMAN", color_scheme="gray", size="3", align="center", variant="solid", high_contrast=True),
                rx.badge("HTLM", color_scheme="gray", size="3", align="center", variant="solid", high_contrast=True),
                rx.badge("CSS", color_scheme="gray", size="3", align="center", variant="solid", high_contrast=True),
                rx.badge("Taildwin", color_scheme="gray", size="3", align="center", variant="solid", high_contrast=True),
                flow="row",
                spacing="4",
                wrap="wrap",
            ),
            rx.code("< PROYECTS />", color_scheme="teal", margin_top="16px"),
            rx.divider(),
            #rx.heading("Manual QA", size="3"),
            rx.flex(
                #rx.image(src="/mockup.png", width="300px", height="auto"),
                rx.center(
                    rx.heading("QA MANUAL", size="8", color_scheme="teal",
                           style={"writing-mode": "vertical-rl",
                                    "text-orientation": "mixed",}),
                    width="30%"
                ),

                
                rx.flex(
                    rx.text(
                    "During my final QA project, I designed nine test cases for a dynamic web application in production. Although I didn't have detailed requirements, I used my understanding of user needs and expected functionalities to create test cases tailored to a real-world environment. This challenge allowed me to strengthen my ability to develop effective test cases and tackle real challenges in a production software development environment.",
                    style={"text-indent": "20px"}
                    ),
                    rx.flex(
                        rx.link(rx.button("Test Case design"), href="https://docs.google.com/spreadsheets/d/1TXmdoFAxXG-vDOl26nGEqaOoEUwOmNdcO0ADzxUG5s4/edit#gid=195049823", is_external=True, color_scheme="teal"),
                        rx.link(rx.button("Bug report"), href="https://docs.google.com/document/d/18QCESx9M-B1xkI7oQVbiIc_lG_H9gbhIZJpAWDz-Ec0/edit", is_external=True, color_scheme="teal"),
                        rx.link(rx.button("Report"), href="https://docs.google.com/document/d/1DBlKC5htKXwrx-4voviSnJ_J8wBsh36hZCiKNyhUR4E/edit", is_external=True, color_scheme="teal"),
                        justify="center",
                        width="100%",
                        spacing="4",
                    ),
                    
                    justify="center",
                    width="100%",
                    spacing="4",
                    margin_bottom="32px",
                    direction="column",
            ),
                align="center",
                spacing="4",
                width="100%",
                margin_bottom="16px",
            ),
            
            spacing="5",
            min_height="85vh",
        ),
        rx.divider(),
        rx.text("Developed by ", rx.text.strong("Martín Molina", color_scheme="teal"), " 2024", align="center", margin_top="32px"),
        ),
        rx.mobile_and_tablet(
            rx.vstack(
                rx.hstack(
                    rx.link(
                        rx.icon_button(
                            "mail-plus", variant="ghost", size="2", is_rounded=True, color_scheme="teal"
                        ),
                        href="mailto:martindanielmolina@gmail.com",
                        is_external=True,
                    ),
                    rx.link(
                        rx.icon_button(
                            "github", variant="ghost", size="2", is_rounded=True, color_scheme="teal"
                        ),
                        href="https://github.com/MartinMolinaDev",
                        is_external=True,
                    ),
                    rx.color_mode.button(size="2"),
                    spacing="4",
                    justify="end",
                    width="100%",
                    align="center",
                ),
            rx.heading("Martín Molina", size="8"),
            rx.hstack(
                rx.heading(" Tester", size="6"),
                rx.heading("{QA}", size="6", color_scheme="teal"),
                rx.heading(" Manual & Auto", size="6"),

            ),
            rx.code("< ABAUT ME />", color_scheme="teal", margin_top="16px"),
            rx.divider(),
            rx.text(
                "Committed to learning and growing in the field of manual and automated testing. Ability to work collaboratively and quickly assimilate new concepts. Passionate about contributing to the team's success and achieving exceptional quality standards.",
                style={"text-indent": "20px"},
            ),
            rx.flex(
                rx.link(
                    rx.button(rx.icon("arrow-down-to-line", size=20), "Download CV", variant="outline"),
                    on_click=rx.download(url="/Martin_Molina_CV.pdf", filename="Martin_Molina_CV.pdf"),
                    color_scheme="teal"
                ),
                justify="center", width="100%"
            ),
            rx.code("< SKILS />", color_scheme="teal", margin_top="16px"),
            rx.divider(),
            rx.flex(
                rx.badge("Python", color_scheme="gray", size="3", align="center", variant="solid", high_contrast=True),
                rx.badge("Playwright", color_scheme="gray", size="3", align="center", variant="solid", high_contrast=True),
                rx.badge("Selenium", color_scheme="gray", size="3", align="center", variant="solid", high_contrast=True),
                rx.badge("SQL", color_scheme="gray", size="3", align="center", variant="solid", high_contrast=True),
                rx.badge("POSTMAN", color_scheme="gray", size="3", align="center", variant="solid", high_contrast=True),
                rx.badge("HTLM", color_scheme="gray", size="3", align="center", variant="solid", high_contrast=True),
                rx.badge("CSS", color_scheme="gray", size="3", align="center", variant="solid", high_contrast=True),
                rx.badge("Taildwin", color_scheme="gray", size="3", align="center", variant="solid", high_contrast=True),
                flow="row",
                spacing="4",
                wrap="wrap",
            ),
            rx.code("< PROYECTS />", color_scheme="teal", margin_top="16px"),
            rx.divider(),
            rx.heading("Manual QA", size="3"),
            rx.flex(
                rx.image(src="/mockup_h.png", width="500px", height="auto"),
                rx.text(
                    "During my final QA project, I designed nine test cases for a dynamic web application in production. Although I didn't have detailed requirements, I used my understanding of user needs and expected functionalities to create test cases tailored to a real-world environment. This challenge allowed me to strengthen my ability to develop effective test cases and tackle real challenges in a production software development environment.",
                    style={"text-indent": "20px"},
                ),
                direction="column",
                align="center",
                spacing="4",
                width="100%",
                margin_bottom="16px",
            ),
            rx.flex(
                rx.link(rx.button("Test Case design"), href="https://docs.google.com/spreadsheets/d/1TXmdoFAxXG-vDOl26nGEqaOoEUwOmNdcO0ADzxUG5s4/edit#gid=195049823", is_external=True, color_scheme="teal"),
                rx.link(rx.button("Bug report"), href="https://docs.google.com/document/d/18QCESx9M-B1xkI7oQVbiIc_lG_H9gbhIZJpAWDz-Ec0/edit", is_external=True, color_scheme="teal"),
                rx.link(rx.button("Report"), href="https://docs.google.com/document/d/1DBlKC5htKXwrx-4voviSnJ_J8wBsh36hZCiKNyhUR4E/edit", is_external=True, color_scheme="teal"),
                justify="center",
                width="100%",
                spacing="4",
                margin_bottom="32px",
            ),
            spacing="4",
            min_height="85vh",
        ),
        rx.divider(),
        rx.text("Developed by ", rx.text.strong("Martín Molina", color_scheme="teal"), " 2024", align="center", margin_top="32px"),
        ),
        size="2",
    )


app = rx.App()
app.add_page(index)
