import { NgModule } from '@angular/core';
import { MenuContentComponent } from './menu-content/menu-content';
import { MemberPhotoComponent } from './member-photo/member-photo';
@NgModule({
	declarations: [MenuContentComponent,
    MemberPhotoComponent],
	imports: [],
	exports: [MenuContentComponent,
    MemberPhotoComponent]
})
export class ComponentsModule {}
