/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext, useEffect, useState } from "react"
import { ColorModeContext, EventLoopContext } from "$/utils/context"
import { Event, getBackendURL, isTrue, refs } from "$/utils/state"
import { ArrowDownToLineIcon as LucideArrowDownToLineIcon, GithubIcon as LucideGithubIcon, MailPlusIcon as LucideMailPlusIcon, MoonIcon as LucideMoonIcon, SunIcon as LucideSunIcon, WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { toast, Toaster } from "sonner"
import env from "$/env.json"
import { Badge as RadixThemesBadge, Box as RadixThemesBox, Button as RadixThemesButton, Code as RadixThemesCode, Container as RadixThemesContainer, Flex as RadixThemesFlex, Heading as RadixThemesHeading, IconButton as RadixThemesIconButton, Link as RadixThemesLink, Separator as RadixThemesSeparator, Strong as RadixThemesStrong, Text as RadixThemesText } from "@radix-ui/themes"
import NextLink from "next/link"
import NextHead from "next/head"



const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


export function Link_c73a2f4ef69f1f1a7a43eaa826345012 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_abf76732e326cc80923dd1d67f668a9f = useCallback(((...args) => (addEvents([(Event("_download", ({ ["url"] : "/Martin_Molina_CV.pdf", ["filename"] : "Martin_Molina_CV.pdf" }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <RadixThemesLink color={"teal"} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} href={"#"} onClick={on_click_abf76732e326cc80923dd1d67f668a9f} target={(true ? "_blank" : "")}>

<RadixThemesButton variant={"outline"}>

<LucideArrowDownToLineIcon css={({ ["color"] : "var(--current-color)" })} size={20}/>
{"Download CV"}
</RadixThemesButton>
</RadixThemesLink>
  )
}

export function Iconbutton_9abaaed98bc89bdb98e7d4aee12a89f7 () {
  
  const { toggleColorMode } = useContext(ColorModeContext)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_9922dd3e837b9e087c86a2522c2c93f8 = useCallback(toggleColorMode, [addEvents, Event, toggleColorMode])



  
  return (
    <RadixThemesIconButton css={({ ["padding"] : "6px", ["background"] : "transparent", ["color"] : "inherit", ["zIndex"] : "20", ["&:hover"] : ({ ["cursor"] : "pointer" }) })} onClick={on_click_9922dd3e837b9e087c86a2522c2c93f8} size={"2"}>

<Fragment_f44ca3ea4bbd8aae627eb8f0f6904b9a/>
</RadixThemesIconButton>
  )
}

export function Link_ff311fe8d056a1acdcb21fa595c317d6 () {
  





  
  return (
    <RadixThemesLink asChild={true} color={"teal"} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")}>

<NextLink href={"https://docs.google.com/document/d/18QCESx9M-B1xkI7oQVbiIc_lG_H9gbhIZJpAWDz-Ec0/edit"} passHref={true}>

<RadixThemesButton>

{"Bug report"}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_e2b072af1e1c257006edffbbfe91aea4 () {
  





  
  return (
    <RadixThemesLink asChild={true} color={"teal"} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")}>

<NextLink href={"https://docs.google.com/document/d/1DBlKC5htKXwrx-4voviSnJ_J8wBsh36hZCiKNyhUR4E/edit"} passHref={true}>

<RadixThemesButton>

{"Report"}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Fragment_f2f0916d2fcc08b7cdf76cec697f0750 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);





  
  return (
    <Fragment>

{isTrue((connectErrors.length > 0)) ? (
  <Fragment>

<LucideWifiOffIcon css={({ ["color"] : "crimson", ["zIndex"] : 9999, ["position"] : "fixed", ["bottom"] : "33px", ["right"] : "33px", ["animation"] : (pulse+" 1s infinite") })} size={32}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Link_c54d8c83879fd7e4412d6495bfa10a8e () {
  





  
  return (
    <RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")}>

<NextLink href={"mailto:martindanielmolina@gmail.com"} passHref={true}>

<RadixThemesIconButton color={"teal"} css={({ ["padding"] : "6px", ["isRounded"] : true })} size={"2"} variant={"ghost"}>

<LucideMailPlusIcon css={({ ["color"] : "var(--current-color)" })} size={24}/>
</RadixThemesIconButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Toaster_6e6ebf8d7ce589d59b7d382fb7576edf () {
  
  const { resolvedColorMode } = useContext(ColorModeContext)

  refs['__toast'] = toast
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  const toast_props = ({ ["description"] : ("Check if server is reachable at "+getBackendURL(env.EVENT).href), ["closeButton"] : true, ["duration"] : 120000, ["id"] : "websocket-error" });
  const [userDismissed, setUserDismissed] = useState(false);
  (useEffect(
() => {
    if ((connectErrors.length >= 2)) {
        if (!userDismissed) {
            toast.error(
                `Cannot connect to server: ${((connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : '')}.`,
                {...toast_props, onDismiss: () => setUserDismissed(true)},
            )
        }
    } else {
        toast.dismiss("websocket-error");
        setUserDismissed(false);  // after reconnection reset dismissed state
    }
}
, [connectErrors]))




  
  return (
    <Toaster closeButton={false} expand={true} position={"bottom-right"} richColors={true} theme={resolvedColorMode}/>
  )
}

export function Link_3c907ac47612a0752a2ffaab2619c5d9 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_abf76732e326cc80923dd1d67f668a9f = useCallback(((...args) => (addEvents([(Event("_download", ({ ["url"] : "/Martin_Molina_CV.pdf", ["filename"] : "Martin_Molina_CV.pdf" }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <RadixThemesLink color={"teal"} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} href={"#"} onClick={on_click_abf76732e326cc80923dd1d67f668a9f}>

<RadixThemesButton variant={"outline"}>

<LucideArrowDownToLineIcon css={({ ["color"] : "var(--current-color)" })} size={20}/>
{"Download CV"}
</RadixThemesButton>
</RadixThemesLink>
  )
}

export function Fragment_f44ca3ea4bbd8aae627eb8f0f6904b9a () {
  
  const { resolvedColorMode } = useContext(ColorModeContext)





  
  return (
    <Fragment>

{isTrue((resolvedColorMode === "light")) ? (
  <Fragment>

<LucideSunIcon css={({ ["color"] : "var(--current-color)" })}/>
</Fragment>
) : (
  <Fragment>

<LucideMoonIcon css={({ ["color"] : "var(--current-color)" })}/>
</Fragment>
)}
</Fragment>
  )
}

export function Link_66dbd0e93d6d8a5395637e8dba9ef6d9 () {
  





  
  return (
    <RadixThemesLink asChild={true} color={"teal"} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")}>

<NextLink href={"https://docs.google.com/spreadsheets/d/1TXmdoFAxXG-vDOl26nGEqaOoEUwOmNdcO0ADzxUG5s4/edit#gid=195049823"} passHref={true}>

<RadixThemesButton>

{"Test Case design"}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_681af2b749d09f737046603392468add () {
  





  
  return (
    <RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(true ? "_blank" : "")}>

<NextLink href={"https://github.com/MartinMolinaDev"} passHref={true}>

<RadixThemesIconButton color={"teal"} css={({ ["padding"] : "6px", ["isRounded"] : true })} size={"2"} variant={"ghost"}>

<LucideGithubIcon css={({ ["color"] : "var(--current-color)" })} size={24}/>
</RadixThemesIconButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Div_602c14884fa2de27f522fe8f94374b02 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);





  
  return (
    <div css={({ ["position"] : "fixed", ["width"] : "100vw", ["height"] : "0" })} title={("Connection Error: "+((connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''))}>

<Fragment_f2f0916d2fcc08b7cdf76cec697f0750/>
</div>
  )
}

export default function Component() {
    




  return (
    <Fragment>

<Fragment>

<Div_602c14884fa2de27f522fe8f94374b02/>
<Toaster_6e6ebf8d7ce589d59b7d382fb7576edf/>
</Fragment>
<RadixThemesContainer css={({ ["padding"] : "16px" })} size={"2"}>

<RadixThemesBox css={({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "block" }) })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["minHeight"] : "85vh" })} direction={"column"} gap={"5"}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["width"] : "100%", ["paddingRight"] : "16px" })} direction={"row"} justify={"end"} gap={"4"}>

<Link_c54d8c83879fd7e4412d6495bfa10a8e/>
<Link_681af2b749d09f737046603392468add/>
<Iconbutton_9abaaed98bc89bdb98e7d4aee12a89f7/>
</RadixThemesFlex>
<RadixThemesHeading size={"9"}>

{"Mart\u00edn Molina"}
</RadixThemesHeading>
<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"3"}>

<RadixThemesHeading size={"8"}>

{" Tester"}
</RadixThemesHeading>
<RadixThemesHeading color={"teal"} size={"8"}>

{"{ QA }"}
</RadixThemesHeading>
<RadixThemesHeading size={"8"}>

{" Manual & Automation"}
</RadixThemesHeading>
</RadixThemesFlex>
<RadixThemesCode color={"teal"} css={({ ["marginTop"] : "16px" })}>

{"< ABAUT ME />"}
</RadixThemesCode>
<RadixThemesSeparator size={"4"}/>
<RadixThemesText as={"p"} css={({ ["text-indent"] : "20px" })}>

{"Committed to learning and growing in the field of manual and automated testing. Ability to work collaboratively and quickly assimilate new concepts. Passionate about contributing to the team's success and achieving exceptional quality standards."}
</RadixThemesText>
<RadixThemesFlex css={({ ["width"] : "100%" })} justify={"center"}>

<Link_c73a2f4ef69f1f1a7a43eaa826345012/>
</RadixThemesFlex>
<RadixThemesCode color={"teal"} css={({ ["marginTop"] : "16px" })}>

{"< SKILS />"}
</RadixThemesCode>
<RadixThemesSeparator size={"4"}/>
<RadixThemesFlex css={({ ["flow"] : "row" })} gap={"4"} wrap={"wrap"}>

<RadixThemesBadge color={"gray"} css={({ ["align"] : "center" })} highContrast={true} size={"3"} variant={"solid"}>

{"Python"}
</RadixThemesBadge>
<RadixThemesBadge color={"gray"} css={({ ["align"] : "center" })} highContrast={true} size={"3"} variant={"solid"}>

{"Playwright"}
</RadixThemesBadge>
<RadixThemesBadge color={"gray"} css={({ ["align"] : "center" })} highContrast={true} size={"3"} variant={"solid"}>

{"Selenium"}
</RadixThemesBadge>
<RadixThemesBadge color={"gray"} css={({ ["align"] : "center" })} highContrast={true} size={"3"} variant={"solid"}>

{"SQL"}
</RadixThemesBadge>
<RadixThemesBadge color={"gray"} css={({ ["align"] : "center" })} highContrast={true} size={"3"} variant={"solid"}>

{"POSTMAN"}
</RadixThemesBadge>
<RadixThemesBadge color={"gray"} css={({ ["align"] : "center" })} highContrast={true} size={"3"} variant={"solid"}>

{"HTLM"}
</RadixThemesBadge>
<RadixThemesBadge color={"gray"} css={({ ["align"] : "center" })} highContrast={true} size={"3"} variant={"solid"}>

{"CSS"}
</RadixThemesBadge>
<RadixThemesBadge color={"gray"} css={({ ["align"] : "center" })} highContrast={true} size={"3"} variant={"solid"}>

{"Taildwin"}
</RadixThemesBadge>
</RadixThemesFlex>
<RadixThemesCode color={"teal"} css={({ ["marginTop"] : "16px" })}>

{"< PROYECTS />"}
</RadixThemesCode>
<RadixThemesSeparator size={"4"}/>
<RadixThemesFlex align={"center"} css={({ ["width"] : "100%", ["marginBottom"] : "16px" })} gap={"4"}>

<RadixThemesFlex css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "30%" })}>

<RadixThemesHeading color={"teal"} css={({ ["writing-mode"] : "vertical-rl", ["text-orientation"] : "mixed" })} size={"8"}>

{"QA MANUAL"}
</RadixThemesHeading>
</RadixThemesFlex>
<RadixThemesFlex css={({ ["width"] : "100%", ["marginBottom"] : "32px" })} direction={"column"} justify={"center"} gap={"4"}>

<RadixThemesText as={"p"} css={({ ["text-indent"] : "20px" })}>

{"During my final QA project, I designed nine test cases for a dynamic web application in production. Although I didn't have detailed requirements, I used my understanding of user needs and expected functionalities to create test cases tailored to a real-world environment. This challenge allowed me to strengthen my ability to develop effective test cases and tackle real challenges in a production software development environment."}
</RadixThemesText>
<RadixThemesFlex css={({ ["width"] : "100%" })} justify={"center"} gap={"4"}>

<Link_66dbd0e93d6d8a5395637e8dba9ef6d9/>
<Link_ff311fe8d056a1acdcb21fa595c317d6/>
<Link_e2b072af1e1c257006edffbbfe91aea4/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
<RadixThemesSeparator size={"4"}/>
<RadixThemesText align={"center"} as={"p"} css={({ ["marginTop"] : "32px" })}>

{"Developed by "}
<RadixThemesStrong css={({ ["colorScheme"] : "teal" })}>

{"Mart\u00edn Molina"}
</RadixThemesStrong>
{" 2024"}
</RadixThemesText>
</RadixThemesBox>
<RadixThemesBox css={({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "none" }) })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["minHeight"] : "85vh" })} direction={"column"} gap={"4"}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} justify={"end"} gap={"4"}>

<Link_c54d8c83879fd7e4412d6495bfa10a8e/>
<Link_681af2b749d09f737046603392468add/>
<Iconbutton_9abaaed98bc89bdb98e7d4aee12a89f7/>
</RadixThemesFlex>
<RadixThemesHeading size={"8"}>

{"Mart\u00edn Molina"}
</RadixThemesHeading>
<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"3"}>

<RadixThemesHeading size={"6"}>

{" Tester"}
</RadixThemesHeading>
<RadixThemesHeading color={"teal"} size={"6"}>

{"{QA}"}
</RadixThemesHeading>
<RadixThemesHeading size={"6"}>

{" Manual & Auto"}
</RadixThemesHeading>
</RadixThemesFlex>
<RadixThemesCode color={"teal"} css={({ ["marginTop"] : "16px" })}>

{"< ABAUT ME />"}
</RadixThemesCode>
<RadixThemesSeparator size={"4"}/>
<RadixThemesText as={"p"} css={({ ["text-indent"] : "20px" })}>

{"Committed to learning and growing in the field of manual and automated testing. Ability to work collaboratively and quickly assimilate new concepts. Passionate about contributing to the team's success and achieving exceptional quality standards."}
</RadixThemesText>
<RadixThemesFlex css={({ ["width"] : "100%" })} justify={"center"}>

<Link_3c907ac47612a0752a2ffaab2619c5d9/>
</RadixThemesFlex>
<RadixThemesCode color={"teal"} css={({ ["marginTop"] : "16px" })}>

{"< SKILS />"}
</RadixThemesCode>
<RadixThemesSeparator size={"4"}/>
<RadixThemesFlex css={({ ["flow"] : "row" })} gap={"4"} wrap={"wrap"}>

<RadixThemesBadge color={"gray"} css={({ ["align"] : "center" })} highContrast={true} size={"3"} variant={"solid"}>

{"Python"}
</RadixThemesBadge>
<RadixThemesBadge color={"gray"} css={({ ["align"] : "center" })} highContrast={true} size={"3"} variant={"solid"}>

{"Playwright"}
</RadixThemesBadge>
<RadixThemesBadge color={"gray"} css={({ ["align"] : "center" })} highContrast={true} size={"3"} variant={"solid"}>

{"Selenium"}
</RadixThemesBadge>
<RadixThemesBadge color={"gray"} css={({ ["align"] : "center" })} highContrast={true} size={"3"} variant={"solid"}>

{"SQL"}
</RadixThemesBadge>
<RadixThemesBadge color={"gray"} css={({ ["align"] : "center" })} highContrast={true} size={"3"} variant={"solid"}>

{"POSTMAN"}
</RadixThemesBadge>
<RadixThemesBadge color={"gray"} css={({ ["align"] : "center" })} highContrast={true} size={"3"} variant={"solid"}>

{"HTLM"}
</RadixThemesBadge>
<RadixThemesBadge color={"gray"} css={({ ["align"] : "center" })} highContrast={true} size={"3"} variant={"solid"}>

{"CSS"}
</RadixThemesBadge>
<RadixThemesBadge color={"gray"} css={({ ["align"] : "center" })} highContrast={true} size={"3"} variant={"solid"}>

{"Taildwin"}
</RadixThemesBadge>
</RadixThemesFlex>
<RadixThemesCode color={"teal"} css={({ ["marginTop"] : "16px" })}>

{"< PROYECTS />"}
</RadixThemesCode>
<RadixThemesSeparator size={"4"}/>
<RadixThemesHeading size={"3"}>

{"Manual QA"}
</RadixThemesHeading>
<RadixThemesFlex align={"center"} css={({ ["width"] : "100%", ["marginBottom"] : "16px" })} direction={"column"} gap={"4"}>

<img css={({ ["width"] : "500px", ["height"] : "auto" })} src={"/mockup_h.png"}/>
<RadixThemesText as={"p"} css={({ ["text-indent"] : "20px" })}>

{"During my final QA project, I designed nine test cases for a dynamic web application in production. Although I didn't have detailed requirements, I used my understanding of user needs and expected functionalities to create test cases tailored to a real-world environment. This challenge allowed me to strengthen my ability to develop effective test cases and tackle real challenges in a production software development environment."}
</RadixThemesText>
</RadixThemesFlex>
<RadixThemesFlex css={({ ["width"] : "100%", ["marginBottom"] : "32px" })} justify={"center"} gap={"4"}>

<Link_66dbd0e93d6d8a5395637e8dba9ef6d9/>
<Link_ff311fe8d056a1acdcb21fa595c317d6/>
<Link_e2b072af1e1c257006edffbbfe91aea4/>
</RadixThemesFlex>
</RadixThemesFlex>
<RadixThemesSeparator size={"4"}/>
<RadixThemesText align={"center"} as={"p"} css={({ ["marginTop"] : "32px" })}>

{"Developed by "}
<RadixThemesStrong css={({ ["colorScheme"] : "teal" })}>

{"Mart\u00edn Molina"}
</RadixThemesStrong>
{" 2024"}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesContainer>
<NextHead>

<title>

{"PortfolioReflex | Index"}
</title>
<meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</Fragment>
  )
}
