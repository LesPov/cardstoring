import { AfterViewInit, Component, ElementRef, Inject, NgModule, PLATFORM_ID, ViewChild } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import Sortable from 'sortablejs';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-openmethod',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './openmethod.component.html',
  styleUrl: './openmethod.component.css'
})

export class OpenmethodComponent implements AfterViewInit {

  @ViewChild('exampleModal', { static: false }) exampleModal?: ElementRef;
  username: string = 'Leonarod';
  isModalOpen: boolean = false;
  newCategoryName: string = ''; // Variable para almacenar el nombre de la nueva categoría
  newItemCounter: number = 0; // Inicializar el contador de nuevos ítems
  maxItems: number = 10; // Definir el límite máximo de ítems


  constructor(
    private toastr: ToastrService,
    private elementRef: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const dragArea = this.elementRef.nativeElement.querySelector('.component');
      new Sortable(dragArea, {
        animation: 350
      });
    }
  }

  addItem(): void {
    // Verificar si se alcanzó el límite máximo de ítems
    if (this.newItemCounter >= this.maxItems) {
      this.toastr.warning('Se alcanzó el límite máximo de ítems (10)');
      return; // Evitar la creación de un nuevo ítem
    }

    const newItem = document.createElement('div');
    newItem.classList.add('item');

    // Agregar estilos manualmente
    newItem.style.background = '#304B5F';
    newItem.style.height = '200px';
    newItem.style.border = '2px dashed #fff';

    const wrapper = this.elementRef.nativeElement.querySelector('.wrapper');
    wrapper.insertBefore(newItem, wrapper.querySelector('.new_item'));

    // Anima el movimiento del new_item a la derecha
    const new_item = wrapper.querySelector('.new_item');
    new_item.style.transition = 'transform 0.3s ease';
    setTimeout(() => {
      new_item.style.transform = 'translateX(100%)';
    }, 0);
    setTimeout(() => {
      new_item.style.transition = '';
      new_item.style.transform = '';
    }, 300)

    // Incrementar el contador de nuevos ítems
    this.newItemCounter++;

    // Mostrar el mensaje con el recuento actualizado en la consola
    console.log(`Número total de nuevos ítems: ${this.newItemCounter}`);

    this.toastr.success('Se creó una nueva categoría');

    this.close(); // Cierra el modal después de agregar un nuevo elemento
  }

  // Método para abrir el modal
  open() {
    this.newCategoryName = ''; // Reinicia el campo de entrada del nombre de la categoría

    // Cambia el estilo del wrapper agregando una clase
    document.querySelector('.sectionmodal')?.classList.add('modal-open');

    // Código para abrir el modal
    (this.exampleModal?.nativeElement as HTMLElement).style.display = 'block';
  }

  // Método para cerrar el modal
  close() {

    // Elimina la clase que agregamos cuando el modal estaba abierto
    document.querySelector('.sectionmodal')?.classList.remove('modal-open');
    // Código para cerrar el modal
    (this.exampleModal?.nativeElement as HTMLElement).style.display = 'none';
  }
  // Método para agregar una nueva categoría
  addCategory() {
    // Aquí puedes realizar cualquier validación adicional antes de agregar la categoría
    console.log('Nueva categoría agregada:', this.newCategoryName);
    this.close(); // Cierra el modal después de agregar la categoría
  }


}
