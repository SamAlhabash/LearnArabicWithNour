import { Component, OnInit } from '@angular/core';

const defaultDropdown = {
  htmlCode: 
`<div ngbDropdown placement="bottom-right">
  <button class="btn btn-secondary" id="dropdownBasic1" ngbDropdownToggle>Dropdown button</button>
  <div ngbDropdownMenu aria-labelledby="dropdownBasic1">
    <button ngbDropdownItem>Action - 1</button>
    <button ngbDropdownItem>Another Action</button>
    <button ngbDropdownItem>Something else is here</button>
  </div>
</div>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html'
})
export class DropdownsComponent {}`
}

const dropdownButtonVariations = {
  htmlCode: 
`<div class="d-inline-block" ngbDropdown placement="bottom-right">
  <button class="btn btn-primary" id="dropdownButtonPrimary" ngbDropdownToggle>Primary</button>
  <div ngbDropdownMenu aria-labelledby="dropdownButtonPrimary">
    <button ngbDropdownItem>Action - 1</button>
    <button ngbDropdownItem>Another Action</button>
    <button ngbDropdownItem>Something else is here</button>
  </div>
</div>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html'
})
export class DropdownsComponent {}`
}

const splitButton = {
  htmlCode: 
`<div class="btn-group">
  <button type="button" class="btn btn-primary">Primary</button>
  <div class="btn-group" ngbDropdown placement="bottom-right" role="group">
    <button class="btn btn-primary dropdown-toggle-split" ngbDropdownToggle></button>
    <div ngbDropdownMenu>
      <button ngbDropdownItem>Action - 1</button>
      <button ngbDropdownItem>Another Action</button>
      <button ngbDropdownItem>Something else is here</button>
    </div>
  </div>
</div>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html'
})
export class DropdownsComponent {}`
}

const buttonSizing = {
  htmlCode: 
`<!-- Large button groups (default and split) -->
<div class="btn-group" ngbDropdown placement="bottom-right">
  <button class="btn btn-secondary btn-lg" id="dropdownButtonLg" ngbDropdownToggle>Large button</button>
  <div ngbDropdownMenu aria-labelledby="dropdownButtonLg">
    ...
  </div>
</div>
<div class="btn-group">
  <button type="button" class="btn btn-secondary btn-lg">Large split button</button>
  <div class="btn-group" ngbDropdown placement="bottom-right" role="group">
    <button class="btn btn-secondary dropdown-toggle-split" ngbDropdownToggle></button>
    <div ngbDropdownMenu>
      ...
    </div>
  </div>
</div>

<!-- Large button groups (default and split) -->
<div class="btn-group" ngbDropdown placement="bottom-right">
  <button class="btn btn-secondary btn-sm" id="dropdownButtonLg" ngbDropdownToggle>Small button</button>
  <div ngbDropdownMenu aria-labelledby="dropdownButtonLg">
    ...
  </div>
</div>
<div class="btn-group">
  <button type="button" class="btn btn-secondary btn-sm">Small split button</button>
  <div class="btn-group" ngbDropdown role="group">
    <button class="btn btn-secondary dropdown-toggle-split" ngbDropdownToggle></button>
    <div ngbDropdownMenu>
      ...
    </div>
  </div>
</div>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html'
})
export class DropdownsComponent {}`
}

const dropUp = {
  htmlCode: 
`<div ngbDropdown placement="top-right" class="btn-group">
  <button class="btn btn-secondary" id="dropupMenu" ngbDropdownToggle>Dropup</button>
  <div ngbDropdownMenu aria-labelledby="dropupMenu">
    ...
  </div>
</div>
<div class="btn-group">
  <button type="button" class="btn btn-secondary">Split dropup</button>
  <div class="btn-group" ngbDropdown placement="top-right" role="group">
    <button class="btn btn-secondary dropdown-toggle-split" ngbDropdownToggle></button>
    <div ngbDropdownMenu>
      ...
    </div>
  </div>
</div>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html'
})
export class DropdownsComponent {}`
}

const dropRight = {
  htmlCode: 
`<div ngbDropdown placement="right-top" class="btn-group">
  <button class="btn btn-secondary" id="droprightMenu" ngbDropdownToggle>Dropright</button>
  <div ngbDropdownMenu aria-labelledby="droprightMenu">
    ...
  </div>
</div>
<div class="btn-group">
  <button type="button" class="btn btn-secondary">Split dropright</button>
  <div class="btn-group" ngbDropdown placement="right-top" role="group">
    <button class="btn btn-secondary dropdown-toggle-split" ngbDropdownToggle></button>
    <div ngbDropdownMenu>
      ...
    </div>
  </div>
</div>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html'
})
export class DropdownsComponent {}`
}

const dropLeft = {
  htmlCode: 
`<div ngbDropdown placement="left-top" class="btn-group">
  <button class="btn btn-secondary" id="dropleftMenu" ngbDropdownToggle>Dropleft</button>
  <div ngbDropdownMenu aria-labelledby="dropleftMenu">
    ...
  </div>
</div>
<div class="btn-group">
  <button type="button" class="btn btn-secondary">Split dropleft</button>
  <div class="btn-group" ngbDropdown placement="left-top" role="group">
    <button class="btn btn-secondary dropdown-toggle-split" ngbDropdownToggle></button>
    <div ngbDropdownMenu>
      ...
    </div>
  </div>
</div>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html'
})
export class DropdownsComponent {}`
}

const menuItemActive = {
  htmlCode: 
`<div ngbDropdown placement="bottom-right">
  <button class="btn btn-secondary" id="dropdownMenuActiveItem" ngbDropdownToggle>Dropdown button</button>
  <div ngbDropdownMenu aria-labelledby="dropdownMenuActiveItem">
    <button ngbDropdownItem>Action - 1</button>
    <button ngbDropdownItem class="active">Another Action</button>
    <button ngbDropdownItem>Something else is here</button>
  </div>
</div>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html'
})
export class DropdownsComponent {}`
}

const menuItemDisabled = {
  htmlCode: 
`<div ngbDropdown placement="bottom-right">
  <button class="btn btn-secondary" id="dropdownMenuActiveItem" ngbDropdownToggle>Dropdown button</button>
  <div ngbDropdownMenu aria-labelledby="dropdownMenuActiveItem">
    <button ngbDropdownItem>Action - 1</button>
    <button ngbDropdownItem class="disabled">Another Action</button>
    <button ngbDropdownItem>Something else is here</button>
  </div>
</div>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html'
})
export class DropdownsComponent {}`
}

const dropdownHeader = {
  htmlCode: 
`<div ngbDropdown placement="bottom-right">
  <button class="btn btn-secondary" id="dropdownHeaderExample" ngbDropdownToggle>Dropdown button</button>
  <div ngbDropdownMenu aria-labelledby="dropdownHeaderExample">
    <h6 class="dropdown-header">Dropdown header</h6>
    <button ngbDropdownItem>Action - 1</button>
    <button ngbDropdownItem class="disabled">Another Action</button>
    <button ngbDropdownItem>Something else is here</button>
  </div>
</div>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html'
})
export class DropdownsComponent {}`
}

const dropdownDivider = {
  htmlCode: 
`<div ngbDropdown placement="bottom-right">
  <button class="btn btn-secondary" id="dropdownDividerExample" ngbDropdownToggle>Dropdown button</button>
  <div ngbDropdownMenu aria-labelledby="dropdownDividerExample">
    <button ngbDropdownItem>Action - 1</button>
    <button ngbDropdownItem class="disabled">Another Action</button>
    <button ngbDropdownItem>Something else is here</button>
    <div class="dropdown-divider"></div>
    <button ngbDropdownItem>Separated item</button>
  </div>
</div>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html'
})
export class DropdownsComponent {}`
}

const dropdownText = {
  htmlCode: 
`<div ngbDropdown placement="bottom-right">
  <button class="btn btn-secondary" id="dropdownTextExample" ngbDropdownToggle>Dropdown button</button>
  <div ngbDropdownMenu class="p-4" aria-labelledby="dropdownTextExample">
    <p>Some example text that's free-flowing within the dropdown menu.</p>
    <p class="mb-0">And this is more example text.</p>
  </div>
</div>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html'
})
export class DropdownsComponent {}`
}

const dropdownForm = {
  htmlCode: 
`<div ngbDropdown placement="bottom-right">
  <button class="btn btn-secondary" id="dropdownFormExample" ngbDropdownToggle>Dropdown button</button>
  <form ngbDropdownMenu class="p-4" aria-labelledby="dropdownFormExample">
    <div class="form-group">
      <label for="exampleDropdownFormEmail2">Email address</label>
      <input type="email" class="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com">
    </div>
    <div class="form-group">
      <label for="exampleDropdownFormPassword2">Password</label>
      <input type="password" class="form-control" id="exampleDropdownFormPassword2" placeholder="Password">
    </div>
    <button type="submit" class="btn btn-primary">Sign in</button>
  </form>
</div>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html'
})
export class DropdownsComponent {}`
}

@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html',
  preserveWhitespaces: true
})
export class DropdownsComponent implements OnInit {

  defaultDropdownCode: any;
  dropdownButtonVariationsCode: any;
  splitButtonCode: any;
  buttonSizingCode: any;
  dropUpCode: any;
  dropRightCode: any;
  dropLeftCode: any;
  menuItemActiveCode: any;
  menuItemDisabledCode: any;
  dropdownHeaderCode: any;
  dropdownDividerCode: any;
  dropdownTextCode: any;
  dropdownFormCode: any;

  constructor() { }

  ngOnInit(): void {
    this.defaultDropdownCode = defaultDropdown;
    this.dropdownButtonVariationsCode = dropdownButtonVariations;
    this.splitButtonCode = splitButton;
    this.buttonSizingCode = buttonSizing;
    this.dropUpCode = dropUp;
    this.dropRightCode = dropRight;
    this.dropLeftCode = dropLeft;
    this.menuItemActiveCode = menuItemActive;
    this.menuItemDisabledCode = menuItemDisabled;
    this.dropdownHeaderCode = dropdownHeader;
    this.dropdownDividerCode = dropdownDivider;
    this.dropdownTextCode = dropdownText;
    this.dropdownFormCode = dropdownForm;
  }

  scrollTo(element: any) {
    element.scrollIntoView({behavior: 'smooth'});
  }

}
