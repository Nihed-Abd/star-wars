import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { VehiclesListComponent } from './vehicles-list.component';

describe('VehiclesListComponent', () => {
  let component: VehiclesListComponent;
  let fixture: ComponentFixture<VehiclesListComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [VehiclesListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesListComponent);
    component = fixture.componentInstance;
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch vehicles', () => {
    const mockVehicles = [
      { id: '1', name: 'Vehicle 1', model: 'Model 1', vehicleClass: 'Class 1', crew: '1' },
      { id: '2', name: 'Vehicle 2', model: 'Model 2', vehicleClass: 'Class 2', crew: '2' }
    ];

    component.ngOnInit();

    const req = httpTestingController.expectOne('https://swapi-graphql.netlify.app/.netlify/functions/index');
    expect(req.request.method).toEqual('POST');
    req.flush({ data: { allVehicles: { vehicles: mockVehicles } } });

    expect(component.vehicleList).toEqual(mockVehicles);
  });

  it('should display error message on failed fetch', () => {
    component.ngOnInit();

    const req = httpTestingController.expectOne('https://swapi-graphql.netlify.app/.netlify/functions/index');
    req.error(new ErrorEvent('Network error'));

    expect(component.error).toBeTruthy();
  });
});
