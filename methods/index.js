const metod = {

  async iniciarSesion(page) {
    console.log('Iniciando Sesion');
    await page.type('div.MuiBox-root.jss193 > div:nth-child(1) > div > input', process.env.email)
    await page.type('div.MuiBox-root.jss193 > div:nth-child(2) > div > input', process.env.password);

    await page.evaluate(() => {
      let btnIngresar;
      btnIngresar = document.querySelector('div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-lg-4 > div > div.jss106 > div > div.MuiBox-root.jss193 > div.MuiBox-root.jss290.jss185 > button')
      btnIngresar.click();
      return
    })
  },
  async clickCompañia(page) {
    await page.waitForSelector("div:nth-child(2) > div > div > div > ul > div:nth-child(5) > a");
    await page.evaluate(() => {
      let listUl;
      listUl = document.querySelectorAll("div:nth-child(2) > div > div > div > ul")
      let listSpan = listUl[0].querySelectorAll('span')
      let a;
      for (let i = 0; i < listSpan.length; i++) {
        let nom = listSpan[i].textContent;
        if (nom.indexOf("key") === 9) {
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
    await page.waitForSelector('main > div > div > div > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained');
    await page.waitForTimeout(1000)
    await page.evaluate(() => {
      let btnClick = document.querySelector('main > div > div > div > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained')
      let a = btnClick.querySelectorAll('span')
      let respt = false;
      for (let i = 0; i < a.length; i++) {
        if (a[i].textContent === 'Crear Job') {
          respt = true;
          break;
        }
      }
      if (respt) {
        btnClick.click()
      }
      return
    }, [])

  },
  async nombreJob(page) {
    await page.waitForSelector('div.header > div.title > div > div > div > div > div > input')

    await page.click('div.header > div.title > div > div > div > div > div > input')
    await page.focus('div.header > div.title > div > div > div > div > div > input')
    await page.keyboard.down('Control');
    await page.keyboard.press('A');
    await page.keyboard.up('Control');
    await page.keyboard.press('Backspace');

    await page.type('div.header > div.title > div > div > div > div > div > input', 'job1', { delay: 1 })
  },

  async cambiarFecha(page) {
    await page.waitForSelector('div.header > div.title > div > div > div > div > div > div > button')
    await page.evaluate(() => {
      let btnFech = document.querySelector("div.header > div.title > div > div > div > div > div > div > button")
      if (btnFech.children.length === 2) {
        let b = btnFech.children
        if (b[0].children.length === 1 && b[1].children.length === 0) {
          btnFech.click()
        }
      }
      let btnBusc = document.querySelector("div:nth-child(1) > div.MuiPickersCalendarHeader-switchHeader > button:nth-child(3)");

      if (btnBusc.children.length === 2) {
        let b = btnBusc.children
        if (b[0].children.length === 1 && b[1].children.length === 0) {
          btnBusc.click()
        }
      }
      let global = document.querySelectorAll('div.MuiPaper-root.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > div > div > div.MuiPickersSlideTransition-transitionContainer.MuiPickersCalendar-transitionContainer > div')
      let semanas = global[0].querySelectorAll('div');
      let dia = semanas[16].querySelectorAll('div');
      dia[3].click();
    })
  },

  async AgregandoCompañia(page) {
    console.log("select dropdown");
    await page.waitForSelector('#job-company-container > div > a');
    await page.evaluate(() => {
      let btnCompa = document.querySelector('#job-company-container > div > a');
      btnCompa.click();
      return
    })
    await page.type('div.MuiPaper-root.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > div > div.MuiCardContent-root > form > div > div > div > input', 'Chaos-Monkey', { delay: 1 });
    await page.waitForSelector('div.MuiAutocomplete-popper > div > ul > li')
    await page.evaluate(() => {
      let listSelect = document.querySelectorAll("body > div.MuiAutocomplete-popper > div > ul > li")
      listSelect[listSelect.length - 1].querySelector('li').click()
      return
    })
  },

  async btnPublicar(page) {
    console.log('Publicar Job');
    await page.waitForTimeout(1000);
    await page.evaluate(() => {
      let btn = document.querySelectorAll('button')
      for (let i = 0; i < btn.length; i++) {
        let a = btn[i].children
        for (let e = 0; e < a.length; e++) {
          if (a[e].textContent === 'Publicar') {
            btn[i].click()
          }
        }
      }
      return
    })
  },

  async cerrarVentana(page) {

    await page.waitForTimeout(1000)
    console.log('Cerrando la Ventana de Aviso');
    await page.keyboard.down('Escape');
  },

  async seguimientoJob(page) {
    console.log('Dando click al Seguimiento');
    await page.waitForTimeout(1500)
    await page.evaluate(() => {
      let listUl = document.querySelectorAll('ul')
      for (let i = 0; i < listUl.length; i++) {
        let listA = listUl[i].querySelectorAll('a')
        for (let y = 0; y < listA.length; y++) {
          let etiqDiv = listA[y].lastChild
          let etiqSpan = etiqDiv.firstChild.textContent
          if (etiqSpan === 'Seguimiento de job')
            listA[y].click()
        }
      }
    })
  },


  async renombrarJob1(page) {
    await page.waitForSelector('#cards-container > div > div')
    console.log('Renombrar el Input');

    await page.evaluate(() => {
      let btnClick = document.querySelector('#asociate-company > span');
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
      clickTarea.click();
    })
    console.log('Agregar Tarea');
    await page.waitForSelector('#wrapped-tabpanel-tasks > div > button');
    await page.evaluate(() => {
      let btnAddTares = document.querySelector('#wrapped-tabpanel-tasks > div > button');
      btnAddTares.click();
    })
  },

  async clickFormulario(page) {
    console.log('Click al formulario');
    await page.waitForSelector('main > div > div > div > div:nth-child(4) > div')
    await page.evaluate(() => {
      let a = document.querySelectorAll("main > div > div")
      for (let i = 0; i < a.length; i++) {
        let b = a[1].lastChild
        let c = b.children
        for (let o = 0; o < c.length; o++) {
          let d = c[o].querySelectorAll('span')[0].textContent
          if (d.indexOf('Formulario') === 0) {
            c[o].lastElementChild.click()
          }
        }
      }

      return
    })
  },

  async agregarLocacion(page) {
    console.log('Agregando Locacion');
    await page.waitForSelector('div.MuiCardContent-root > div > div > div.MuiPaper-root.MuiPaper-outlined.MuiPaper-rounded > div > button');
    await page.evaluate(() => {
      let btnAddLocacion = document.querySelector('div.MuiCardContent-root > div > div > div.MuiPaper-root.MuiPaper-outlined.MuiPaper-rounded > div > button');
      btnAddLocacion.click()
    })
    await page.type('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.MuiCardContent-root > div > div > div > div > div > div > div > div.MuiFormControl-root.MuiTextField-root.MuiFormControl-fullWidth > div > input', 'Lima', { delay: 1 });
    await page.evaluate(() => {
      let btnAddElecion = document.querySelector('div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.MuiCardContent-root > div > div > div.MuiPaper-root > div > div > div > div > div.MuiPaper-root');
      btnAddElecion.click();
    })
  },

  async agregarConocimientos(page) {
    console.log('Agregando Conocimientos');
    await page.evaluate(() => {
      let a = document.querySelector("div.MuiCardContent-root > div > div > div:nth-child(1) > div.MuiPaper-root.MuiStepper-root.MuiStepper-vertical")
      let b = a.querySelectorAll('div > span')
      let i = 0;
      while (i % 2 === 0) {
        let x = b[i].lastChild.textContent;
        if (x.indexOf('Conocimient') === 3) {
          b[i].click()
        }
        i += 2;
        if (i > b.length) {
          break;
        }
      }

      let btnAddConoc = document.querySelector("div.MuiCardContent-root > div > div > div.MuiPaper-root > div > button")
      btnAddConoc.click()
      return
    })

    await page.type('div.MuiCardContent-root > div > div > div.MuiPaper-root > div > div > div > div > div.MuiFormControl-root.MuiTextField-root.MuiFormControl-fullWidth > div > input', 'Testing', { delay: 1 })
    await page.click('div.MuiCardContent-root > div > div > div.MuiPaper-root > div > div > div > div > div.MuiPaper-root.MuiCard-root')
  },
  async agregarFunciones(page) {
    console.log('Agregando Funciones');
    await page.evaluate(() => {

      let a = document.querySelector("div.MuiCardContent-root > div > div > div:nth-child(1) > div.MuiPaper-root.MuiStepper-root.MuiStepper-vertical")
      let b = a.querySelectorAll('div > span')
      let i = 0;
      while (i % 2 === 0) {
        let x = b[i].lastChild.textContent
        if (x.indexOf('iones') === 7) {
          b[i].click()
        }
        i += 2;
        if (i > b.length) {
          break;
        }
      }

      let addFuncion = document.querySelector("body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.MuiCardContent-root > div > div > div.MuiPaper-root > div > button");
      addFuncion.click()
      return
    })

    await page.type('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.MuiCardContent-root > div > div > div.MuiPaper-root > div > div > div > div > div.MuiFormControl-root.MuiTextField-root.MuiFormControl-fullWidth > div > input', 'Testear', { delay: 1 })
    await page.click('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.MuiCardContent-root > div > div > div.MuiPaper-root > div > div > div > div > div.MuiPaper-root.MuiCard-root')
  },
  async ActivarTarea(page) {
    console.log('Click  a Activar Tarea');
    await page.evaluate(() => {
      let activarTare = document.querySelector("div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div > div:nth-child(3) > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained")
      activarTare.click();
      return
    })
  },
  async clickVideoCuestionario(page) {
    console.log('Cliack al Video Cuestionario');
    await page.waitForSelector("div:nth-child(2) > div > main > div > div > div > div:nth-child(2) > div")
    await page.evaluate(() => {
      let a = document.querySelectorAll("main > div > div")
      for (let i = 0; i < a.length; i++) {
        let b = a[1].lastChild
        let c = b.children
        for (let o = 0; o < c.length; o++) {
          let d = c[o].querySelectorAll('span')[0].textContent
          if (d.indexOf('Cuestionario') === 6) {
            c[o].lastElementChild.click()
          }
        }
      }
      return
    })
  },
  async AgregarPregunta1(page) {
    await page.waitForSelector('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div.MuiCardContent-root > div > div > div > div > div.MuiCardContent-root > div > div > div > div > div > textarea:nth-child(1)')
    console.log('Agregando preunta 1');
    await page.evaluate(() => {
      let listDiv = document.querySelectorAll("div.MuiCardContent-root > div > div > div > div > div.MuiCardContent-root > div > div")
      let listArea = listDiv[0].querySelectorAll('textarea')
      let busDiv = listArea[0].parentNode
      busDiv.click();
      return
    })

    await page.type('div.MuiCardContent-root > div > div > div > div > div.MuiCardContent-root > div > div > div:nth-child(1) > div > div > div:nth-child(1) > textarea:nth-child(1)', 'Pregunta 1', { delay: 1 })
    await page.type('div.MuiCardContent-root > div > div > div > div > div.MuiCardContent-root > div > div > div:nth-child(1) > div > div > div:nth-child(2) > textarea:nth-child(1)', 'Respuesta 1', { delay: 1 })
  },
  async btnQuienEvalua(page) {
    console.log('Click a Quien Evalua');
    await page.waitForTimeout(1000)
    await page.evaluate(() => {
      let clickQuienEvalua = document.querySelector("div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div > header > div > div > div > button:nth-child(2)")
      clickQuienEvalua.click()
    })
  },
  async anadirKrowder(page, krowdy) {
    console.log('Añadir Krowders::: ' + typeof krowdy);
    await page.waitForTimeout(1000)
    await page.evaluate(() => {
      let addKrowder = document.querySelector("div.MuiCardContent-root > div > div > div:nth-child(2) > div > div.MuiCardContent-root > div > div > button")
      addKrowder.click();
      return
    })

    await page.keyboard.down('Tab')
    await page.type('div.MuiPaper-root.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > div > div.MuiCardContent-root > div > div > input', krowdy.toString())
    await page.evaluate(() => {
      let clickAddKrowd = document.querySelector('div.MuiPaper-root.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > div > div.MuiCardActions-root > button');
      clickAddKrowd.click()
    })
  },
  async btnTareaVideoCuestionario(page) {
    await page.waitForTimeout(1000)
    console.log('Click activar Tarea');
    await page.evaluate(() => {
      let activarTarea = document.querySelector("div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div > div:nth-child(3) > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained")
      activarTarea.click()
      return
    })

    await page.waitForTimeout(1500)
    await page.click("main > div > div.MuiPaper-root > div > button")
  },
  async btnAgregarEtapa(page) {
    console.log('Agregando nueva etapa');
    await page.waitForSelector("#cards-container > button")
    await page.evaluate(() => {
      let newEtapa = document.querySelector("#cards-container > button")
      newEtapa.click()
      return
    })
  },
  async nuevaTarea(page) {
    console.log('Agregando nueva tarea');
    await page.waitForTimeout(1500)
    await page.evaluate(() => {
      let newTare = document.querySelector("#cards-container > div:nth-child(2) > div > div > div.MuiCardContent-root > div.MuiTabs-root > div > div > button:nth-child(2)")
      newTare.click()
      let listDiv = document.querySelectorAll("#cards-container > div")
      let div2 = listDiv[listDiv.length - 1].querySelectorAll('button')
      for (let i = 0; i < div2.length; i++) {
        let y = div2[i].firstChild
        if (y.textContent === " Crear tarea") {
          div2[i].click()
          break
        }
      }
      return
    })
  },

  async btnVideoEntrevista(page) {
    console.log('Click Video Entrevista');
    await page.waitForSelector("main > div > div > div > div:nth-child(7) > div")
    await page.evaluate(() => {
      let a = document.querySelectorAll("main > div > div")
      for (let i = 0; i < a.length; i++) {
        let b = a[1].lastChild
        let c = b.children
        for (let o = 0; o < c.length; o++) {
          let d = c[o].querySelectorAll('span')[0].textContent
          if (d.indexOf('Entrevista') === 6) {
            c[o].lastElementChild.click()
          }
        }
      }
      return
    })
  },
  async btnAddCompetencia(page) {
    console.log('Agregando Competencias');
    await page.waitForSelector('div.MuiCardContent-root > div > div > div > div > div.MuiCardContent-root > div > button')
    await page.evaluate(() => {
      let addCompe = document.querySelector('div.MuiCardContent-root > div > div > div > div > div.MuiCardContent-root > div > button')
      addCompe.click()
    })
    return true
  },

  async selectCheckBox(page) {
    await page.waitForSelector("div.MuiCardContent-root > div > div:nth-child(1) > div > label:nth-child(1)")
    await page.waitForTimeout(1000)
    console.log('select checbox');
    const result = await page.evaluate(() => {
      for (let i = 0; i < 3; i++) {
        let label = document.querySelectorAll("div.MuiCardContent-root > div > div:nth-child(1) > div > label")[i]
        label.click()
      }
    })
    console.log("Resultado de clicks: " + result)
    return
  },
  async btnGuardarVidConf(page) {
    console.log('Click a Guardar');
    await page.waitForSelector('div.MuiCardContent-root > div > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained')
    await page.evaluate(() => {
      let clickGuardar = document.querySelector("div.MuiCardContent-root > div > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained")
      clickGuardar.click()
      return
    })
  },

  async btnQuienEval(page) {
    console.log('Quien Evalua');
    await page.waitForSelector("div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div > header > div > div > div > button:nth-child(2)")
    await page.evaluate(() => {
      let btnQuienEv = document.querySelector("div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div > header > div > div > div > button:nth-child(2)")
      btnQuienEv.click();
    })
  },
  async btnSoliKrow(page) {
    console.log('Ayuda a Krowdy');
    await page.waitForSelector("div.MuiCardContent-root > div > div > div:nth-child(2) > div > div.MuiCardContent-root > div > div.MuiPaper-root.MuiCard-root > button")
    await page.evaluate(() => {
      let a = document.querySelectorAll("div.MuiCardContent-root > div > div > div:nth-child(2)")
      let b = a[0].querySelectorAll('button')
      for (let i = 0; i < b.length; i++) {
        let e = b[i].children
        for (let o = 0; o < e.length; o++) {
          if (e[o].textContent === "Solicita ayuda a los Krowders") {
            b[i].click()
          }
        }
      }
    })
  },
  async btnActivarTarea(page) {
    console.log('Activar Tarea');
    await page.waitForSelector("div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div > div:nth-child(3) > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained")
    await page.evaluate(() => {
      let btnActivar = document.querySelector("div.MuiDialog-container.MuiDialog-scrollPaper > div > div > div > div:nth-child(3) > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained")
      btnActivar.click()
      return
    })
  }
}

module.exports = metod