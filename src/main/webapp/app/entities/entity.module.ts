import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'region',
                loadChildren: './region/region.module#JhipsterSampleApplicationGradleRegionModule'
            },
            {
                path: 'country',
                loadChildren: './country/country.module#JhipsterSampleApplicationGradleCountryModule'
            },
            {
                path: 'location',
                loadChildren: './location/location.module#JhipsterSampleApplicationGradleLocationModule'
            },
            {
                path: 'department',
                loadChildren: './department/department.module#JhipsterSampleApplicationGradleDepartmentModule'
            },
            {
                path: 'task',
                loadChildren: './task/task.module#JhipsterSampleApplicationGradleTaskModule'
            },
            {
                path: 'employee',
                loadChildren: './employee/employee.module#JhipsterSampleApplicationGradleEmployeeModule'
            },
            {
                path: 'job',
                loadChildren: './job/job.module#JhipsterSampleApplicationGradleJobModule'
            },
            {
                path: 'job-history',
                loadChildren: './job-history/job-history.module#JhipsterSampleApplicationGradleJobHistoryModule'
            }
            /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
        ])
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplicationGradleEntityModule {}
