import { Component } from '@angular/core';

@Component({
  selector: 'app-mc-donalds-contact',
  standalone: false,
  templateUrl: './mc-donalds-contact.html',
  styleUrl: './mc-donalds-contact.scss'
})
export class McDonaldsContact {

  contacto = {
    titulo_direccion : "Puedes encontrarnos en",
    img_direccion: "assets/img/direccion2.png",
    localidad: "Tandil",
    direccion: "Pinto y Alem",

    titulo_horarios: "Horarios de atencion",
    horario_i_mañana_entre_semana: 8,
    horario_f_mañana_entre_semana: 14,
    horario_i_tarde_entre_semana: 18,
    horario_f_tarde_entre_semana: 23,
    horario_i_fin_de_semana: 10,
    horario_f_fin_de_semana: 23,
    img_horarios: "assets/img/horarios.png",

    titulo_redes: "Redes Sociales",
    facebook: "McDonalds Tandil",
    instragram: "@McDonaldsTandil",
    tiktok: "McDonaldsTandil",
    email: "McDonaldsTandil@gmail.com",
    twitter: "@McDonaldsTandil",
    whatsapp: "2494-001122",
    img_redes: "assets/img/redes_sociales.png",
  }


}
