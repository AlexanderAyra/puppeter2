const metod = {

  async iniciarSesion(page) {
    console.log('Iniciando Sesion');
    await page.type('div.MuiBox-root.jss193 > div:nth-child(1) > div > input', process.env.email)
    await page.type('div.MuiBox-root.jss193 > div:nth-child(2) > div > input', process.env.password);

    // let btnIngresar = await page.click('#root > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-lg-4 > div > div.jss106 > div > div.MuiBox-root.jss193 > div.MuiBox-root.jss290.jss185 > button')
    await page.evaluate(() => {
      let btnIngresar;
      btnIngresar = document.querySelector('#root > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-lg-4 > div > div.jss106 > div > div.MuiBox-root.jss193 > div.MuiBox-root.jss290.jss185 > button')
      if (!btnIngresar) {
        btnIngresar = document.querySelector('#root > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-lg-4 > div > div.jss106 > div > div.MuiBox-root.jss193 > div.MuiBox-root.jss290.jss185 > button')
      }
      btnIngresar.click();
      return
    })
  },
  async clickCompañia(page) {
    await page.waitForSelector("#root > div > div:nth-child(2) > div > div > div > ul > div:nth-child(5) > a");
    await page.evaluate(() => {
      let listUl;
      listUl = document.querySelectorAll("#root > div > div:nth-child(2) > div > div > div > ul")
      if (!listUl) {
        listUl = document.querySelectorAll("#root > div > div:nth-child(2) > div > div > div > ul")
      }
      let listSpan = listUl[0].querySelectorAll('span')
      let a;
      for (let i = 0; i < listSpan.length; i++) {
        if (listSpan[i].textContent === "Chaos-Monkey-SRE") {
          a = i;
        }
      }
      let papa = listSpan[a].parentNode
      let abuelo = papa.parentNode
      abuelo.click()
      return
    }, [])
  },
  async clickBtnCreateJob(page) {
    console.log("Clickeando boton create job");
    await page.waitForSelector('#root > div > div:nth-child(2) > div > main > div > div > div > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.jss31.jss34.MuiButton-containedPrimary');
    await page.waitForTimeout(1000)
    await page.evaluate(() => {
      let btnClick;
      btnClick = document.querySelector('#root > div > div:nth-child(2) > div > main > div > div > div > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.jss31.jss34.MuiButton-containedPrimary')
      if (!btnClick) {
        btnClick = document.querySelector('#root > div > div:nth-child(2) > div > main > div > div > div > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.jss31.jss34.MuiButton-containedPrimary')
      }
      btnClick.click()
      return
    }, [])

  },
  async nombreJob(page) {
    await page.waitForSelector('#root > div > div:nth-child(2) > div > main > div > div > div > div > div > div.header > div.title > div > div > div > div > div > input')

    await page.click('#root > div > div:nth-child(2) > div > main > div > div > div > div > div > div.header > div.title > div > div > div > div > div > input')
    await page.focus('#root > div > div:nth-child(2) > div > main > div > div > div > div > div > div.header > div.title > div > div > div > div > div > input');
    await page.keyboard.down('Control');
    await page.keyboard.press('A');
    await page.keyboard.up('Control');
    await page.keyboard.press('Backspace');

    await page.type('#root > div > div:nth-child(2) > div > main > div > div > div > div > div > div.header > div.title > div > div > div > div > div > input', 'job1', { delay: 1 })
  },

  async cambiarFecha(page) {

    await page.evaluate(() => {
      let btnFech = document.querySelector("#root > div > div:nth-child(2) > div > main > div > div > div > div > div > div.header > div.title > div > div > div > div > div > div > button")
      if (!btnFech) {
        btnFech = document.querySelector("#root > div > div:nth-child(2) > div > main > div > div > div > div > div > div.header > div.title > div > div > div > div > div > div > button")
      }
      btnFech.click()
      let btnBusc = document.querySelector("body > div.MuiPopover-root > div.MuiPaper-root.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > div > div > div:nth-child(1) > div.MuiPickersCalendarHeader-switchHeader > button:nth-child(3)");
      if (!btnBusc) {
        btnBusc = document.querySelector("body > div.MuiPopover-root > div.MuiPaper-root.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > div > div > div:nth-child(1) > div.MuiPickersCalendarHeader-switchHeader > button:nth-child(3)");
      }
      btnBusc.click()
      let global = document.querySelectorAll('body > div.MuiPopover-root > div.MuiPaper-root.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > div > div > div.MuiPickersSlideTransition-transitionContainer.MuiPickersCalendar-transitionContainer > div')
      if (!global) {
        global = document.querySelectorAll('body > div.MuiPopover-root > div.MuiPaper-root.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > div > div > div.MuiPickersSlideTransition-transitionContainer.MuiPickersCalendar-transitionContainer > div')
      }


      let semanas = global[0].querySelectorAll('div');
      let dia = semanas[16].querySelectorAll('div');
      dia[3].click();
    })
  },

  async AgregandoCompañia(page) {
    console.log("select dropdown");

    await page.evaluate(() => {
      let btnCompa = document.querySelector('#job-company-container > div > a');
      if (!btnCompa) {
        btnCompa = document.querySelector('#job-company-container > div > a');
      }
      btnCompa.click();
      return
    })
    await page.type('#simple-popover > div.MuiPaper-root.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > div > div.MuiCardContent-root > form > div > div > div > input', 'Chaos-Monkey', { delay: 1 });
    await page.waitForSelector('body > div.MuiAutocomplete-popper > div > ul > li')
    await page.evaluate(() => {
      let listSelect;
      listSelect = document.querySelectorAll("body > div.MuiAutocomplete-popper > div > ul > li")
      if (!listSelect) {
        listSelect = document.querySelectorAll("body > div.MuiAutocomplete-popper > div > ul > li")
      }
      listSelect[listSelect.length - 1].querySelector('li').click()
    }, [])
  },

  async btnPublicar(page) {
    console.log('Publicar Job');
    // await page.waitForTimeout("#root > div > div:nth-child(2) > div > main > div > div > div > div > button");
    await page.evaluate(() => {
      let btnPub;
      btnPub = document.querySelector("#root > div > div:nth-child(2) > div > main > div > div > div > div > button")
      if (!btnPub) {
        btnPub = document.querySelector("#root > div > div:nth-child(2) > div > main > div > div > div > div > button")
      }
      btnPub.click()
      return
    })
  },

  async cerrarVentana(page) {

    await page.waitForTimeout(1000)
    await page.keyboard.down('Escape');
  },

  async seguimientoJob(page) {
    console.log('Dando click al Seguimiento');
    await page.waitForTimeout(1500)
    await page.evaluate(() => {
      let listUl;
      listUl = document.querySelectorAll("#root > div > div:nth-child(2) > div > div > div > ul")
      if (!listUl) {
        listUl = document.querySelectorAll("#root > div > div:nth-child(2) > div > div > div > ul")
      }
      let listSpan = listUl[0].querySelectorAll('span')
      let a;
      for (let i = 0; i < listSpan.length; i++) {
        if (listSpan[i].textContent === "Seguimiento de job") {
          a = i;
        }
      }
      let papa = listSpan[a].parentNode
      let abuelo = papa.parentNode
      abuelo.click()
      return
    }, [])
  },

  async renombrarJob1(page) {
    await page.waitForSelector('#cards-container > div > div')
    console.log('Renombrar el Input');

    // await page.click('#asociate-company > span')
    await page.evaluate(() => {
      let btnClick;
      btnClick = document.querySelector('#asociate-company > span');
      if (!btnClick) {
        btnClick = document.querySelector('#asociate-company > span');
      }
      btnClick.click()
    })
    await page.focus('#asociate-company > div > div > input');
    await page.keyboard.down('Control');
    await page.keyboard.press('A');
    await page.keyboard.up('Control');
    await page.keyboard.press('Backspace');

    await page.type('#asociate-company > div > div > input', 'job1', { delay: 1 });
    await page.keyboard.press('Enter');
  },

  async clickTarea(page) {
    console.log('Dar click a las tareas');
    await page.waitForSelector('#cards-container > div > div > div > div > div > div > div > button:nth-child(2)')
    await page.evaluate(() => {
      let clickTarea = document.querySelector('#cards-container > div > div > div > div > div > div > div > button:nth-child(2)');
      if (!clickTarea) {
        clickTarea = document.querySelector('#cards-container > div > div > div > div > div > div > div > button:nth-child(2)');
      }
      clickTarea.click();
    })
    // await page.click('#cards-container > div > div > div > div > div > div > div > button:nth-child(2)');
    console.log('Agregar Tarea');
    await page.waitForSelector('#wrapped-tabpanel-tasks > div > button');
    // await page.click('#wrapped-tabpanel-tasks > div > button');
    await page.evaluate(() => {
      let btnAddTares;
      btnAddTares = document.querySelector('#wrapped-tabpanel-tasks > div > button');
      if (!btnAddTares) {
        btnAddTares = document.querySelector('#wrapped-tabpanel-tasks > div > button');
      }
      btnAddTares.click();
    })
  },

  async clickFormulario(page) {
    console.log('Click al formulario');
    await page.waitForSelector('#root > div > div:nth-child(2) > div > main > div > div > div > div:nth-child(4) > div')
    await page.evaluate(() => {
      let btnFormulario = document.querySelector("#root > div > div:nth-child(2) > div > main > div > div > div > div:nth-child(4) > div")
      if (!btnFormulario) {
        btnFormulario = document.querySelector("#root > div > div:nth-child(2) > div > main > div > div > div > div:nth-child(4) > div")
      }
      btnFormulario.click()
      return
    })
  },

  async agregarLocacion(page) {
    console.log('Agregando Locacion');
    await page.waitForSelector('div.MuiCardContent-root > div > div > div.MuiPaper-root.MuiPaper-outlined.MuiPaper-rounded > div > button');

    // await page.click('div.MuiCardContent-root > div > div > div.MuiPaper-root.MuiPaper-outlined.MuiPaper-rounded > div > button');
    await page.evaluate(() => {
      let btnAddLocacion = document.querySelector('div.MuiCardContent-root > div > div > div.MuiPaper-root.MuiPaper-outlined.MuiPaper-rounded > div > button');
      if (!btnAddLocacion) {
        btnAddLocacion = document.querySelector('div.MuiCardContent-root > div > div > div.MuiPaper-root.MuiPaper-outlined.MuiPaper-rounded > div > button');
      }
      btnAddLocacion.click()
    })
    await page.type('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.MuiCardContent-root > div > div > div > div > div > div > div > div.MuiFormControl-root.MuiTextField-root.MuiFormControl-fullWidth > div > input', 'Lima', { delay: 1 });
    // await page.click('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.MuiCardContent-root > div > div > div.MuiPaper-root > div > div > div > div > div.MuiPaper-root');
    await page.evaluate(() => {
      let btnAddElecion = document.querySelector('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.MuiCardContent-root > div > div > div.MuiPaper-root > div > div > div > div > div.MuiPaper-root');
      if (!btnAddElecion) {
        btnAddElecion = document.querySelector('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.MuiCardContent-root > div > div > div.MuiPaper-root > div > div > div > div > div.MuiPaper-root');
      }
      btnAddElecion.click();
    })
  },
  async agregarConocimientos(page) {
    console.log('Agregando Conocimientos');
    await page.evaluate(() => {
      let btnConoc = document.querySelector("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.MuiCardContent-root > div > div > div:nth-child(1) > div.MuiPaper-root.MuiStepper-root > div:nth-child(3) > span")
      let btnAddConoc = document.querySelector("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.MuiCardContent-root > div > div > div.MuiPaper-root > div > button")
      if (!btnConoc || !btnAddConoc) {
        btnConoc = document.querySelector("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.MuiCardContent-root > div > div > div:nth-child(1) > div.MuiPaper-root.MuiStepper-root > div:nth-child(3) > span")
        btnAddConoc = document.querySelector("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.MuiCardContent-root > div > div > div.MuiPaper-root > div > button")
      }
      btnConoc.click()
      btnAddConoc.click()
      return
    })

    await page.type('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.MuiCardContent-root > div > div > div.MuiPaper-root > div > div > div > div > div.MuiFormControl-root.MuiTextField-root.MuiFormControl-fullWidth > div > input', 'Testing', { delay: 1 })
    await page.click('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.MuiCardContent-root > div > div > div.MuiPaper-root > div > div > div > div > div.MuiPaper-root.MuiCard-root')
  },
  async agregarFunciones(page) {
    console.log('Agregando Funciones');
    await page.evaluate(() => {
      let clickFunciones = document.querySelector("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.MuiCardContent-root > div > div > div:nth-child(1) > div.MuiPaper-root.MuiStepper-root.MuiStepper-vertical > div:nth-child(5) > span");
      let addFuncion = document.querySelector("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.MuiCardContent-root > div > div > div.MuiPaper-root > div > button");
      if (!clickFunciones || addFuncion) {
        clickFunciones = document.querySelector("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.MuiCardContent-root > div > div > div:nth-child(1) > div.MuiPaper-root.MuiStepper-root.MuiStepper-vertical > div:nth-child(5) > span");
        addFuncion = document.querySelector("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.MuiCardContent-root > div > div > div.MuiPaper-root > div > button");
      }
      clickFunciones.click()
      addFuncion.click()
      return
    })

    await page.type('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.MuiCardContent-root > div > div > div.MuiPaper-root > div > div > div > div > div.MuiFormControl-root.MuiTextField-root.MuiFormControl-fullWidth > div > input', 'Testear', { delay: 1 })
    await page.click('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.MuiCardContent-root > div > div > div.MuiPaper-root > div > div > div > div > div.MuiPaper-root.MuiCard-root')
  },
  async ActivarTarea(page) {
    console.log('Click  a Activar Tarea');
    await page.evaluate(() => {
      let activarTare = document.querySelector("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div > div:nth-child(3) > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained")
      if (!activarTare) {
        activarTare = document.querySelector("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div > div:nth-child(3) > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained")
      }
      activarTare.click();
      return
    })
  },
  async clickVideoCuestionario(page) {
    console.log('Cliack al Video Cuestionario');
    await page.waitForSelector("#root > div > div:nth-child(2) > div > main > div > div > div > div:nth-child(2) > div")
    await page.evaluate(() => {
      let clickVideoC = document.querySelector("#root > div > div:nth-child(2) > div > main > div > div > div > div:nth-child(2) > div")
      if (!clickVideoC) {
        clickVideoC = document.querySelector("#root > div > div:nth-child(2) > div > main > div > div > div > div:nth-child(2) > div")
      }
      clickVideoC.click()
      return
    })
  },
  async AgregarPregunta1(page) {
    await page.waitForSelector('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.MuiCardContent-root > div > div > div > div > div.MuiCardContent-root > div > div > div > div > div > textarea:nth-child(1)')
    console.log('Agregando preunta 1');
    await page.evaluate(() => {
      let listDiv = document.querySelectorAll("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.MuiCardContent-root > div > div > div > div > div.MuiCardContent-root > div > div")
      if (!listDiv) {
        listDiv = document.querySelectorAll("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.MuiCardContent-root > div > div > div > div > div.MuiCardContent-root > div > div")
      }
      let listArea = listDiv[0].querySelectorAll('textarea')
      let busDiv = listArea[0].parentNode
      busDiv.click();
      return
    })

    await page.type('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.MuiCardContent-root > div > div > div > div > div.MuiCardContent-root > div > div > div:nth-child(1) > div > div > div:nth-child(1) > textarea:nth-child(1)', 'Pregunta 1', { delay: 1 })
    await page.type('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.MuiCardContent-root > div > div > div > div > div.MuiCardContent-root > div > div > div:nth-child(1) > div > div > div:nth-child(2) > textarea:nth-child(1)', 'Respuesta 1', { delay: 1 })
  },
  async btnQuienEvalua(page) {
    console.log('Click a Quien Evalua');
    await page.waitForTimeout(1000)
    await page.evaluate(() => {
      let clickQuienEvalua = document.querySelector("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div > header > div > div > div > button:nth-child(2)")
      if (!clickQuienEvalua) {
        clickQuienEvalua = document.querySelector("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div > header > div > div > div > button:nth-child(2)")
      }
      clickQuienEvalua.click()
    })
  },
  async anadirKrowder(page, krowdy) {
    console.log('Añadir Krowders::: ' + typeof krowdy);
    await page.waitForTimeout(1000)
    await page.evaluate(() => {
      let addKrowder = document.querySelector("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.MuiCardContent-root > div > div > div:nth-child(2) > div > div.MuiCardContent-root > div > div > button")
      if (!addKrowder) {
        addKrowder = document.querySelector("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.MuiCardContent-root > div > div > div:nth-child(2) > div > div.MuiCardContent-root > div > div > button")
      }
      addKrowder.click();
      return
    })

    await page.keyboard.down('Tab')
    await page.type('body > div.MuiPopover-root > div.MuiPaper-root.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > div > div.MuiCardContent-root > div > div > input', krowdy.toString())
    // await page.click('body > div.MuiPopover-root > div.MuiPaper-root.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > div > div.MuiCardActions-root > button')
    await page.evaluate(() => {
      let clickAddKrowd = document.querySelector('body > div.MuiPopover-root > div.MuiPaper-root.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > div > div.MuiCardActions-root > button');
      if (!clickAddKrowd) {
        clickAddKrowd = document.querySelector('body > div.MuiPopover-root > div.MuiPaper-root.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > div > div.MuiCardActions-root > button');
      }
      clickAddKrowd.click()
    })
  },
  async btnTareaVideoCuestionario(page) {
    await page.waitForTimeout(1000)
    console.log('Click activar Tarea');
    await page.evaluate(() => {
      let activarTarea = document.querySelector("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div > div:nth-child(3) > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained")
      if (!activarTarea) {
        activarTarea = document.querySelector("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div > div:nth-child(3) > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained")
      }
      activarTarea.click()
      return
    })

    await page.waitForTimeout(1500)
    await page.click("#root > div > div:nth-child(2) > div > main > div > div.MuiPaper-root > div > button");
  },
  async btnAgregarEtapa(page) {
    console.log('Agregando nueva etapa');
    await page.waitForSelector("#cards-container > button")
    await page.evaluate(() => {
      let newEtapa = document.querySelector("#cards-container > button")
      if (!newEtapa) {
        newEtapa = document.querySelector("#cards-container > button")
      }
      newEtapa.click()
      return
    })
  },
  async nuevaTarea(page) {
    console.log('Agregando nueva tarea');
    await page.waitForTimeout(1500)
    await page.evaluate(() => {
      let newTare = document.querySelector("#cards-container > div:nth-child(2) > div > div > div.MuiCardContent-root > div.MuiTabs-root > div > div > button:nth-child(2)")
      if (!newTare) {
        newTare = document.querySelector("#cards-container > div:nth-child(2) > div > div > div.MuiCardContent-root > div.MuiTabs-root > div > div > button:nth-child(2)")
      }
      newTare.click()
      let listDiv = document.querySelectorAll("#cards-container > div")
      let div2 = listDiv[listDiv.length - 1].querySelectorAll('button')
      div2[5].click();
      return
    })
  },
  async btnVideoEntrevista(page) {
    console.log('Click Video Entrevista');
    await page.waitForSelector("#root > div > div:nth-child(2) > div > main > div > div > div > div:nth-child(7) > div");
    await page.evaluate(() => {
      let btnVidEntre = document.querySelector("#root > div > div:nth-child(2) > div > main > div > div > div > div:nth-child(7) > div")
      if (!btnVidEntre) {
        btnVidEntre = document.querySelector("#root > div > div:nth-child(2) > div > main > div > div > div > div:nth-child(7) > div")
      }
      btnVidEntre.click()
      return
    })
  },
  async btnAddCompetencia(page) {
    console.log('Agregando Competencias');
    await page.waitForSelector('div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.MuiCardContent-root > div > div > div > div > div.MuiCardContent-root > div > button')
    await page.evaluate(() => {
      let addCompe = document.querySelector("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.MuiCardContent-root > div > div > div > div > div.MuiCardContent-root > div > button")
      if (!addCompe) {
        addCompe = document.querySelector("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.MuiCardContent-root > div > div > div > div > div.MuiCardContent-root > div > button")
      }
      addCompe.click()
    })
    return true
  },

  async selectCheckBox(page) {
    await page.waitForSelector("body > div > div.MuiPaper-root.MuiCard-root > div.MuiCardContent-root > div > div:nth-child(1) > div > label:nth-child(1)")
    await page.waitForTimeout(1000)
    console.log('select checbox');
    const result = await page.evaluate(() => {
      for (let i = 0; i < 3; i++) {
        let label = document.querySelectorAll("body > div > div.MuiPaper-root.MuiCard-root > div.MuiCardContent-root > div > div:nth-child(1) > div > label")[i]
        if (!label) {
          label = document.querySelectorAll("body > div > div.MuiPaper-root.MuiCard-root > div.MuiCardContent-root > div > div:nth-child(1) > div > label")[i]
        }
        let a = label.querySelectorAll('span')
        a[0].click()
      }
    })
    console.log("Resultado de clicks: " + result)
    return
  },
  async btnGuardarVidConf(page) {
    console.log('Click a Guardar');
    await page.waitForSelector('body > div > div.MuiPaper-root.MuiCard-root > div.MuiCardContent-root > div > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained')
    await page.evaluate(() => {
      let clickGuardar = document.querySelector("body > div > div.MuiPaper-root.MuiCard-root > div.MuiCardContent-root > div > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained")
      if (!clickGuardar) {
        clickGuardar = document.querySelector("body > div > div.MuiPaper-root.MuiCard-root > div.MuiCardContent-root > div > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained")
      }
      clickGuardar.click()
      return
    })
  },

  async btnQuienEval(page) {
    console.log('Quien Evalua');
    await page.waitForSelector("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div > header > div > div > div > button:nth-child(2)")
    await page.evaluate(() => {
      let btnQuienEv = document.querySelector("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div > header > div > div > div > button:nth-child(2)")
      if (!btnQuienEv) {
        btnQuienEv = document.querySelector("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div > header > div > div > div > button:nth-child(2)")
      }
      btnQuienEv.click();
    })
  },
  async btnSoliKrow(page) {
    console.log('Ayuda a Krowdy');
    await page.waitForSelector("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.MuiCardContent-root > div > div > div:nth-child(2) > div > div.MuiCardContent-root > div > div.MuiPaper-root.MuiCard-root > button")
    await page.evaluate(() => {
      let btnSolc = document.querySelector("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.MuiCardContent-root > div > div > div:nth-child(2) > div > div.MuiCardContent-root > div > div.MuiPaper-root.MuiCard-root > button")
      if (!btnSolc) {
        btnSolc = document.querySelector("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.MuiCardContent-root > div > div > div:nth-child(2) > div > div.MuiCardContent-root > div > div.MuiPaper-root.MuiCard-root > button")
      }
      btnSolc.click()
    })
  },
  async btnActivarTarea(page) {
    console.log('Activar Tarea');
    await page.waitForSelector('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div > div:nth-child(3) > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained')
    await page.evaluate(() => {
      let btnActivar = document.querySelector("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div > div:nth-child(3) > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained")
      if (!btnActivar) {
        btnActivar = document.querySelector("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div > div:nth-child(3) > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained")
      }
      btnActivar.click()
      return
    })
  }
}

module.exports = metod
