---
comments: true
---
# ASIC Heating 
This post will document the process involved in planning, setup, and managing an ASIC miner is a household setting. There are several important areas to consider before purchasing an ASIC miner for use inside your home. Involving heating, power consumption, and remote management. Documenting the process and steps I took will be shared in this post.
<iframe width="560" height="315" src="https://www.youtube.com/embed/tIneY9daxnw?si=xXTt_P2DcuZ7qO-y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/NFvkVF_3Z3E?si=Dd2QS4phLgK1I4l2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Table of Contents
1. [Introduction](#introduction)
2. [Power Plan](#power-plan)
    1. [Single-Phase 240 Volt 50 Amp Circuit](#single-phase-circuit)
    2. [Power Infrastructure - Products Used](#power-products)
3. [Configuring Miner through Web UI](#configuring-miner-through-web-ui)
    1. [Setup](#setup)
    2. [Firmware](#firmware)
4. [Installation of Silencing Kit](#installation-of-silencing-kit)
5. [Remote Power Switch](#remote-power-switch)
    1. [Why Use A Smart Switch?](#why-use-a-smart-switch)
    2. [Contactor](#contactor)
    3. [WiFi Relay](#wifi-relay)
    4. [Electrical Box](#electrical-Box)
        1. [Electrical Box - Products used](#electrical-box-products)
6. [Managing Heat](#managing-heat)
7. [Future Considerations](#future-considerations)

## Introduction 
[Silencing Kit Installation](https://youtu.be/tIneY9daxnw?si=ualFuQoHbqlXtb2A)
I decided to document the silencing kit installation by recording the process. 
Feel free to comment to on anything provided in this blog at the bottom of the page!

![Pic-Intro](assets/introduction.jpg)

## Power Plan
### Single-Phase 240 Volt 50 Amp Circuit

Utilizing an existing circuit was the cornerstone of formulating my power plan. The circuit in question was a 240 volt 50 amp setup, which implied that finding a suitable PDU would be challenging.

Typically, in industrial data centers, the standard cut-off is at 30 amps. This means that the majority of PDUs available on the market are configured for 240 volts but are capped at 30 amps. There's a solid rationale behind this limitation—it aids in the management of devices per breaker within a facility, thereby facilitating easier isolation of power usage.

When devising a power plan with a specific budget in mind for a facility, it's common practice to assess how many devices can be supported by a 30 amp supply and to restrict those devices to that particular circuit. Should there be a requirement for additional power, it's advisable to allocate another dedicated circuit with its own breaker. This approach forms the basis of the power planning strategy.

![Picture-PDU](assets\pdu.jpg)

### Power Infrastructure - Products Used 

- <a target="_blank" href="https://www.amazon.com/gp/product/B0BFFB458M/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&amp;psc=1&_encoding=UTF8&tag=codypaternost-20&linkCode=ur2&linkId=a9ddd6b402e715f57bfcf0a9944ea4bb&camp=1789&creative=9325">Valiant Power Surge Protection Metered Rack Mount PDU Basic 220v 50a</a>
- <a target="_blank" href="https://www.amazon.com/EDYCARX-Receptacle-Industrial-Outlet-Surface/dp/B0C4FHQ4NL/ref=sr_1_7?crid=UL1FDQDQ3YIA&amp;keywords=L6-50r%252Bblack&amp;qid=1707014530&amp;sprefix=l6-50r%252Bblac%252Caps%252C115&amp;sr=8-7&amp;th=1&_encoding=UTF8&tag=codypaternost-20&linkCode=ur2&linkId=7a11142179905bebf9f17cca03b8f360&camp=1789&creative=9325">Nema 6-50 Receptacle Industrial Grade 50 Amp Outlet Surface Mount Receptacle 2-Pole 3-Wire Nema 6-50r</a>
- <a target="_blank" href="https://www.amazon.com/gp/product/B001348EDC/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&amp;th=1https://www.amazon.com/gp/product/B001348EDC/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&amp;th=1&_encoding=UTF8&tag=codypaternost-20&linkCode=ur2&linkId=7b1e9fae45399d10a7095922959ec344&camp=1789&creative=9325">Tripp Lite Heavy-Duty Computer Power Extension Cord for Servers and Computers 20A 12AWG EC-320-C19 to IEC-320-C20</a>
- <a target="_blank" href="https://www.amazon.com/gp/product/B09R6JM1VC/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&amp;th=1&_encoding=UTF8&tag=codypaternost-20&linkCode=ur2&linkId=f00c7d69d2cd5068fea4916b72d2f3bc&camp=1789&creative=9325">Dracaena 2 Pack PDU UPS Power IEC Male C14 to Female C19 Adapter IEC Connector </a>

*(adapters are not needed for this project but are useful to have)*
## Configuring Miner through Web UI
### Setup

There is a wealth of information available for configuring the KS3M device for the first time. However, IceRiver does not list a manual specifically for the KS3M, although its configuration process is nearly identical to that of the KS3 and KS3L models. For your convenience, Zeus Mining has reformatted the provided PDF manual. You can find both resources below:

- [IceRiver KS3 and KS3L Operation Manual and Troubleshooting](https://www.zeusbtc.com/articles/information/4718-iceriver-ks3-ks3l-operation-manual-and-troubleshooting)
- [IceRiver Product Manuals, Tools, and Firmware](https://www.iceriver.io/tutorial/)

### Firmware

For those looking to download the latest firmware, please use the link below:

- [Firmware Download](https://www.iceriver.io/firmware-download/)

*Note: As of this writing, the latest firmware version is* `ICM168_2_1_0_ks3mupdate.bgz`. This update includes:

1. A fix for the issue of hashboards dropping under low and normal temperature conditions.
2. Corrections for some common bugs.


## Installation of Silencing Kit

## Remote Power Switch

![Smart-Switch](assets\smartswitchbox.jpg)

### Why Use A Smart Switch?

Integrating a smart switch into the entire system is highly beneficial for remote management or automation, particularly when dealing with 240v single-phase circuits where conventional switches might not suffice. This section explores the rationale behind opting for a smart switch, underlining its advantages in remote operations and automation flexibility.

Given the unique requirements of a 240-volt 50 amp circuit, off-the-shelf solutions were inadequate, prompting the creation of a custom switch. This endeavor involved selecting components that could reliably handle the specified power load while adhering to safety standards. 

Example:
- <a target="_blank" href="https://www.amazon.com/Migro-Outdoor-Resistive-Wireless-Compatible/dp/B07WC2BT85/ref=sr_1_2?crid=2XLDLSISRZ8TR&amp;keywords=MIGRO+Wi-Fi+Smart+Controller+240VAC&amp;qid=1707097573&amp;sprefix=migro+wi-fi+smart+controller+240vac%252Caps%252C99&amp;sr=8-2&amp;ufe=app_do%253Aamzn1.fos.18ed3cb5-28d5-4975-8bc7-93deae8f9840&_encoding=UTF8&tag=codypaternost-20&linkCode=ur2&linkId=fcf5f6db25e9f73ef23f4e74decdd2d3&camp=1789&creative=9325">MIGRO Wi-Fi Smart Controller 240VAC</a>

### Contactor

The heart of the custom switch is a contactor, specifically chosen for its capability to manage high loads. The selection was guided by the need for a device that could handle 50 amps continuously, considering the 80/20 rule to avoid overloading. The Schneider Electric LC1D50AKUE contactor, operating in a Normally Open state, was ideal, ensuring that power would be cut off in the absence of a signal, thereby providing an added layer of safety. Additionally, the option for manual latching was incorporated to allow for physical control over the system's power state.

- [Schneider Electric LAD6K10 Latch Block Product Data Sheet](https://download.schneider-electric.com/files?p_enDocType=Instruction+sheet&p_File_Name=151217401A55.pdf&p_Doc_Ref=1512174_01A55)

![SE-Contactor](assets\contactor.jpg)

It's important to know the difference between Definite Purpose and General Purpose contactors. C3controls does a fantastic job explaining the difference between the two. Since I was looking for something robust and wasn’t designed for a specific application, one that was not meant to last as long ideally. 

- [c3controls: *Definite Purpose vs General Purpose Contractor Explanation*](https://www.c3controls.com/white-paper/definite-purpose-contactors-everything-you-need-to-know/ )

Deciding to construct a custom switch suitable for a 240 volt 50 amp circuit involved significant research. I was drawn to Schneider Electric's products for their reliability and quality. A notable obstacle encountered was the need for a contactor capable of functioning in a single-phase system, rather than the more commonly designed multi-phase systems. Schneider Electric provided a valuable diagram that illustrates how to correctly wire their contactor for single-phase power supply, ensuring the project's success.

![Schenider-Electric-Diagram](assets\servlet.png)

- [Single-Phase Wiring on Multi-Phase Contactor](https://www.se.com/th/en/faqs/FA339640/)

- [Schneider Electric LC1D50AKU Contactor](https://www.se.com/us/en/product/LC1D50AKUE/iec-contactor-tesys-deca-green-nonreversing-50a-40hp-at-480vac-up-to-100ka-sccr-3-phase-3-no-100-250vac-vdc-coil/)
- [Product Data Sheet](https://www.se.com/us/en/product/download-pdf/LC1D50AKUE?filename=Schneider+Electric_TeSys-Deca-Contactors_LC1D50AKUE.pdf)


### WiFi Relay

For remote control capabilities, the SONOFF Basic R2 was chosen for its compatibility with the contactor and its ease of integration into the system. This smart WiFi switch enables the modification of the contactor's state via wireless signals, thus facilitating remote operations.

- <a target="_blank" href="https://www.amazon.com/gp/product/B07KP8THFG/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&amp;th=1&_encoding=UTF8&tag=codypaternost-20&linkCode=ur2&linkId=6229be5610313ec9ce82b80390d5fbf1&camp=1789&creative=9325">SONOFF Basic R2 10A Smart WiFi Wireless Light Switch</a>

I did purchase an antenna to incorporate into the box. You will have to solder on the antenna for this model, but it was possible. 

![Soldering-Antenna](assets\sonoff-antenna.jpg)

- <a target="_blank" href="https://www.amazon.com/gp/product/B00TI1XBOE/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&amp;th=1&_encoding=UTF8&tag=codypaternost-20&linkCode=ur2&linkId=323e957a2d4e2c6ef8eb0673de76a9b7&camp=1789&creative=9325">Dual Band WiFi 2-4GHz 5GHz Male Antenna for WiFi Router</a>

### Electrical Box

To house the components and ensure their safe operation, a custom electrical box was designed. This box not only protects the components but also integrates a dual-band WiFi antenna, enhancing the system's connectivity. The inclusion of the antenna required some modification to the SONOFF Basic R2, namely soldering the antenna onto the device for improved signal reception.

#### Electrical Box - Products used
- <a target="_blank" href="https://www.amazon.com/gp/product/B07H2ZMX8R/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&amp;psc=1&_encoding=UTF8&tag=codypaternost-20&linkCode=ur2&linkId=86585a5d9beffba1022415691528bc0c&camp=1789&creative=9325">Hinged Cover Stainless Steel Latch 370x270x150mm Junction Box with Mounting Plate</a>
- <a target="_blank" href="https://www.amazon.com/gp/product/B07H2ZMX8R/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&amp;psc=1&_encoding=UTF8&tag=codypaternost-20&linkCode=ur2&linkId=86585a5d9beffba1022415691528bc0c&camp=1789&creative=9325">Hinged Cover Stainless Steel Latch 370x270x150mm Junction Box with Mounting Plate</a>

*The rails did require some length trimming.*

## Managing Heat

## Future Considerations