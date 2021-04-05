const numberList = [
  {
    number: 551199999999,
    description: "Seminovos"
  },
  {
    number: 5511111111111,
    description: "Serviços"
  },
  {
    number: 5511973860742,
    description: "Central de Vendas"
  }
]

const generateElement = (number) => {
  const element = document.createElement("li");
  Object.assign(element, {
    className: "header__card-whatsapp-item",
    id: number
    }
  )
  return element;
}

const wppList = document.querySelector(".list--header-phones");
while (wppList.hasChildNodes()) {
  wppList.removeChild(wppList.lastChild);
}

numberList.forEach(element => {
  let li = document.createElement("li");
  li = generateElement(element.number);
  wppList.appendChild(li);
});


<div id="header-card-whatsapp" class="card-collapse header__card-whatsapp dropdown-menu dropdown-menu-right show">
  <div class="header__card-phones-items">
    <div data-parent="#header-card-whatsapp" data-toggle="collapse" data-target="#wpp-content-0" class="card-collapse__header" aria-expanded="true"> (Expandir) Ford Teste<i class="icon icon-arrow-d"></i>
    </div>
    <div id="wpp-content-0" class="card-collapse__content collapse show" aria-expanded="true" style="">
      <ul class="list list--header-phones list--border-bottom">
        <li class="header__card-whatsapp-item">
          <a href="#" class="header-mobile__whatsapp-link" data-name="Seminovos" data-number="+55 (11) 9999-9999" data-product="Menu de Whatsapp" data-channel="Site" data-category="UsedModel" data-brand="Ford" data-link="https://api.whatsapp.com/send?phone=551199999999" data-unit="" data-phones="[{&quot;link&quot;:&quot;https://api.whatsapp.com/send?phone=551199999999&quot;,&quot;unit&quot;:null,&quot;area&quot;:&quot;UsedModel&quot;},{&quot;link&quot;:&quot;https://api.whatsapp.com/send?phone=5511111111111&quot;,&quot;unit&quot;:null,&quot;area&quot;:&quot;Service&quot;},{&quot;link&quot;:&quot;https://api.whatsapp.com/send?phone=5511973860742\u0026text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20este%20ve%C3%ADculo.&quot;,&quot;unit&quot;:null,&quot;area&quot;:&quot;Clone&quot;}]" data-units="[{&quot;label&quot;:&quot;São Paulo&quot;,&quot;value&quot;:&quot;escritorio-autoforce-natal&quot;},{&quot;label&quot;:&quot;Natal&quot;,&quot;value&quot;:&quot;matriz-e219f57d-4cd4-4afc-8d7f-f4def386d437&quot;}]" data-show-cpf="0" data-show-units="false"><strong>Seminovos: </strong><span class="header-mobile__whatsapp-number text-mask-phone">+55 (11) 9999-9999</span>
          </a>
          <i class="icon icon-whatsapp"></i>
        </li>
        <li class="header__card-whatsapp-item">
          <a href="#" class="header-mobile__whatsapp-link" data-name="Serviços" data-number="+55 (11) 11111-1111" data-product="Menu de Whatsapp" data-channel="Site" data-category="Service" data-brand="Ford" data-link="https://api.whatsapp.com/send?phone=5511111111111" data-unit="" data-phones="[{&quot;link&quot;:&quot;https://api.whatsapp.com/send?phone=551199999999&quot;,&quot;unit&quot;:null,&quot;area&quot;:&quot;UsedModel&quot;},{&quot;link&quot;:&quot;https://api.whatsapp.com/send?phone=5511111111111&quot;,&quot;unit&quot;:null,&quot;area&quot;:&quot;Service&quot;},{&quot;link&quot;:&quot;https://api.whatsapp.com/send?phone=5511973860742\u0026text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20este%20ve%C3%ADculo.&quot;,&quot;unit&quot;:null,&quot;area&quot;:&quot;Clone&quot;}]" data-units="[{&quot;label&quot;:&quot;São Paulo&quot;,&quot;value&quot;:&quot;escritorio-autoforce-natal&quot;},{&quot;label&quot;:&quot;Natal&quot;,&quot;value&quot;:&quot;matriz-e219f57d-4cd4-4afc-8d7f-f4def386d437&quot;}]" data-show-cpf="0" data-show-units="false"><strong>Serviços: </strong><span class="header-mobile__whatsapp-number text-mask-phone">+55 (11) 11111-1111</span></a><i class="icon icon-whatsapp"></i></li><li class="header__card-whatsapp-item"><a href="#" class="header-mobile__whatsapp-link" data-name="Central de Vendas" data-number="+55 (11) 97386-0742" data-product="Menu de Whatsapp" data-channel="Site" data-category="Clone" data-brand="Ford" data-link="https://api.whatsapp.com/send?phone=5511973860742&amp;text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20este%20ve%C3%ADculo." data-unit="" data-phones="[{&quot;link&quot;:&quot;https://api.whatsapp.com/send?phone=551199999999&quot;,&quot;unit&quot;:null,&quot;area&quot;:&quot;UsedModel&quot;},{&quot;link&quot;:&quot;https://api.whatsapp.com/send?phone=5511111111111&quot;,&quot;unit&quot;:null,&quot;area&quot;:&quot;Service&quot;},{&quot;link&quot;:&quot;https://api.whatsapp.com/send?phone=5511973860742\u0026text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20este%20ve%C3%ADculo.&quot;,&quot;unit&quot;:null,&quot;area&quot;:&quot;Clone&quot;}]" data-units="[{&quot;label&quot;:&quot;São Paulo&quot;,&quot;value&quot;:&quot;escritorio-autoforce-natal&quot;},{&quot;label&quot;:&quot;Natal&quot;,&quot;value&quot;:&quot;matriz-e219f57d-4cd4-4afc-8d7f-f4def386d437&quot;}]" data-show-cpf="0" data-show-units="false"><strong>Central de Vendas: </strong><span class="header-mobile__whatsapp-number text-mask-phone">+55 (11) 97386-0742</span>
          </a><i class="icon icon-whatsapp"></i>
        </li>
      </ul>
    </div>
  </div>
</div>