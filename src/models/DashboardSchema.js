const mongoose = require('mongoose');

const dashboardSchema = new mongoose.Schema({
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    sharedWith: [{ 
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, 
      permissions: { type: String, enum: ['view', 'edit'], default: 'view' } 
    }],
});

const Dashboard = mongoose.model('Dashboard', dashboardSchema);
