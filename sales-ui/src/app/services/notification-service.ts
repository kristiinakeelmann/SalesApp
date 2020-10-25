import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {

    constructor(private snackBar: MatSnackBar) {
    }

    notify(message: string, type: NotificationType) {
        const config = this.snackbarConfig(type);
        this.snackBar.open(message, null, config);
    }

    snackbarConfig(type: NotificationType) {
        const config = new MatSnackBarConfig();
        config.duration = 4000;
        config.verticalPosition = 'top';
        if (type === NotificationType.error) {
            config.panelClass = ['snackbar-error'];
        } else if (type === NotificationType.success) {
            config.panelClass = ['snackbar-success'];
        }
        return config;
    }
}

export enum NotificationType {
    success,
    error,
}
