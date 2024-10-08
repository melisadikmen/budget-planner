import { Routes } from '@angular/router';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IncomeComponent } from './income/income.component';
import { ExpenseComponent } from './expense/expense.component';
import { TodoComponent } from './todo/todo.component';
import { HistoryComponent } from './history/history.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    { path: "", component: SideNavComponent },
    { path: "login", component: LoginComponent },
    { path: "side-nav", component: SideNavComponent },
    { path: "dashboard", component: DashboardComponent },
    { path: "income", component: IncomeComponent },
    { path: "expense", component: ExpenseComponent },
    { path: "todo", component: TodoComponent },
    { path: "history", component: HistoryComponent },
    { path: "profile", component: ProfileComponent }

];
